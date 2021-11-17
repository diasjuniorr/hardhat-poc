import { ethers } from "hardhat";

async function main() {

  const PeopleStorageFactory = await ethers.getContractFactory("PeopleStorageFactory");
  const peopleStorageFactory = await PeopleStorageFactory.deploy()

  await peopleStorageFactory.deployed();

  console.log("deployed to ", peopleStorageFactory.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
