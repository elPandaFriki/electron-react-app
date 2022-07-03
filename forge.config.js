const pkg = require("./package.json");

const { version } = pkg;

const icon = "./client/build/favicon.ico";
const name = "PandaApp";
const genericName = name;
const productName = name;
const description = "El Panda Friki's Electron application";
const productDescription = description;
const revision = version;
const categories = ["Utility"];

module.exports = {
  packagerConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name,
        description,
        title: name,
        iconURL: icon,
        setupIcon: icon,
        noMsi: true,
        setupExe: `${name}.exe`,
        version,
      },
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
    {
      name: "@electron-forge/maker-deb",
      config: {
        options: {
          name,
          icon,
          categories,
          description,
          genericName,
          productDescription,
          productName,
          revision,
        },
      },
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {
        options: {
          categories,
          description,
          genericName,
          icon,
          name,
          productDescription,
          productName,
          revision,
          version,
        },
      },
    },
  ],
};
