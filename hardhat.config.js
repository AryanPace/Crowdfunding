require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */


module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/67e14ac1bd3640a4bff8d5d9dc0f2dfd",
      accounts: 
      // ["14f13beda254723f2cad504d43e535d81d14a363073371ed6947cf8f86c51e58", 
      ["14f13beda254723f2cad504d43e535d81d14a363073371ed6947cf8f86c51e58",
      "75dc3f1cdbb8c49e094d9a5a55ab914c2c90695d2cdb6d827e83315f5502b584", 
      "d39417ba79ea1cd795dfd9800afe8eb425076cf5c7daab39d720203d133a2af7", 
      "a8ccedf99ecbec5fb9d8e513639935f6cd6f48f76ab439962ed7f41a9f775b74"]
    },
  },
};
