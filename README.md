# Hardhat POC
This is a poc to test the hardhat tool. The goal is to create, deploy and intereact with a smart contract using hardhat and Nodejs.
It contains a simple smart contract that can be used to deploy a storage, add people and retrieve people from it.

## Installation
```bash
yarn 
```
## Deploying the contract
In order to deploy the smart contract, you'll need to start a local node. You can do it by running the following command:
```bash
npx hardhat node
```

Now open another terminal and run the following command to deploy the contract:
```bash
npx hardhat run scripts/deploy-people-storage.ts --network localhost
```
Get the address of the contract and use it as the second argument of `ethers.getContractAt(name, ADDRESS, signer)`.
Now run the API and try to add people to the contract.
## Starting the API
```bash
yarn start
```
Try accessing `localhost:3000` in your browser.

