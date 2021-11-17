import { expect } from "chai";
import { ethers } from "hardhat";

describe("PeopleStorageFactory", function () {
    it("Should create people storage and add a person to it", async function(){
        const PeopleStorageFactory = await ethers.getContractFactory("PeopleStorageFactory")
        const peopleStorageFactory = await PeopleStorageFactory.deploy()
        await peopleStorageFactory.deployed()

        await peopleStorageFactory.createPeopleStorage()

        const peopleStorageCount = await peopleStorageFactory.getPeopleStorageCount()
        expect(peopleStorageCount.toNumber()).to.equal(1)

        await peopleStorageFactory.addPerson(0, "junior", 27)

        const [person, age] = await peopleStorageFactory.getPerson(0,0)
        expect(person).to.equal("junior")
        expect(age.toNumber()).to.equal(27)
    })
});
