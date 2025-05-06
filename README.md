# Crowdfunding Smart Contract

This Smart Contract can be deploy to the chain in various way, Simple mathod is using RemixIDE and Other technique is demonstrated here is using hardhat.
This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.
But we need to change the test script and also deploy script according to our Smart contract.

First =
Open RemixIDE in browser in which you have metamask wallet.
Remove default code, Copy Crowdfunding.sol file from here and paste it in Contract Folder.
Connect your Metamask wallet.
compile the code.
Deploy it with constructor value.
You will get every detail in log.

Seccond =
Install Hardhat (if not already installed)
```shell
npm install --save-dev hardhat
```

Initialize Hardhat (if not already initialized)
```shell
npx hardhat
```


Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
npx hardhat compile
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
