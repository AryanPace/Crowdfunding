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



Deployment Guide (Using Hardhat)
Follow these steps to deploy your smart contract using Hardhat.

1. Clone the Repository
```shell
git clone https://github.com/AryanPace/Crowdfunding.git
cd Crowdfunding
```
2. Install Dependencies
```shell
npm install
```
3. Compile the Contracts
```shell
npx hardhat compile
```
4. Set Up Environment Variables
Create a .env file in the root directory and add your private key and RPC URL (e.g., from Alchemy or Infura):

```shell
PRIVATE_KEY=your_wallet_private_key
RPC_URL=https://eth-sepolia.g.alchemy.com/v2/your-api-key
```
Warning: Never commit your private key to version control.

5. Deploy the Contract
Run the deployment script:

```shell
npx hardhat run scripts/deploy.js --network sepolia
```
Replace sepolia with the desired network (e.g., mainnet, goerli, etc.) as configured in hardhat.config.js.

6. Verify the Contract (Optional)
If you've deployed to Etherscan-supported networks:

```shell
npx hardhat verify --network sepolia DEPLOYED_CONTRACT_ADDRESS
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
