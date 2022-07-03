const icon = "./client/build/favicon.ico";
const categories = ["Utility"];

module.exports = {
  packagerConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        iconURL: icon,
        setupIcon: icon,
        noMsi: true,
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
          icon,
          categories,
        },
      },
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {
        options: {
          categories,
          icon,
        },
      },
    },
  ],
};
