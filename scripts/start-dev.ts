import { exec } from "child_process";
import * as net from "net";

const port = process.env.PORT ? parseFloat(process.env.PORT) - 100 : 3000;

process.env.ELECTRON_START_URL = `http://localhost:${port}`;
process.env.NODE_ENV = "development";

const client = new net.Socket();
let attempts = 0;
let timeout = setTimeout(() => {}, 0);

const testConnection = () => {
  console.log(`CHECKING CONNECTION (${attempts} attempts)`);
  client.connect({
    port,
  });
};

client.on("connect", () => {
  client.end();
  console.log(`SUCCESSFULLY CONNECTED (${attempts} attempts)`);
  exec("tsc && electron-forge start");
});

client.on("error", () => {
  client.end();
  attempts += 1;
  clearTimeout(timeout);
  if (attempts < 100) {
    timeout = setTimeout(() => {
      testConnection();
    }, 1000);
    return;
  }
  console.log(`COULD NOT CONNECT TO REACT (${attempts} attempts)`);
});

testConnection();
