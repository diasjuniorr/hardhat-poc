/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Greeter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Greeter__factory>;
    getContractFactory(
      name: "MyName",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MyName__factory>;
    getContractFactory(
      name: "Inbox",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Inbox__factory>;
    getContractFactory(
      name: "PeopleStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PeopleStorage__factory>;
    getContractFactory(
      name: "PeopleStorageFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PeopleStorageFactory__factory>;

    getContractAt(
      name: "Greeter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Greeter>;
    getContractAt(
      name: "MyName",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MyName>;
    getContractAt(
      name: "Inbox",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Inbox>;
    getContractAt(
      name: "PeopleStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PeopleStorage>;
    getContractAt(
      name: "PeopleStorageFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PeopleStorageFactory>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}