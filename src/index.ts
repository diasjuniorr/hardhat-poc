import express, { Application, Request, Response } from "express";
import { ethers } from "hardhat";

const app: Application = express();
const port = 3000;
// import {getContract} from "../getContract"
// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get(
    "/",
    async (req: Request, res: Response): Promise<Response> => {
        const accounts = await ethers.getSigners();
        const peopleStorageFactory = await ethers.getContractAt("PeopleStorageFactory", "0x5FbDB2315678afecb367f032d93F642f64180aa3", accounts[0]);
        
       await peopleStorageFactory.createPeopleStorage() 
       await peopleStorageFactory.addPerson(0,"junior",27)

       const [name,age] = await peopleStorageFactory.getPerson(0,0)


        return res.status(200).send({
            name: name ,
            age: age.toNumber()
        });
    }
);

    
try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error: any) {
    console.error(`Error occured: ${error.message}`);
}
