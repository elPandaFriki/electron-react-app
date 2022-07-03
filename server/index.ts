import { exec } from "child_process";
import { app, BrowserWindow } from "electron";
import * as path from "path";
import * as url from "url";

if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
  });
  if (process.env.NODE_ENV === "development") {
    mainWindow.loadURL(process.env.ELECTRON_START_URL);
    mainWindow.webContents.openDevTools();
    return;
  }
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "../client/build/index.html"),
      protocol: "file:",
      slashes: true,
    })
  );
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    exec("cd ./client && npm run stop");
    process.exit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
