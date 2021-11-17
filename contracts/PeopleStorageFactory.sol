//SPDX-License-Identifier: MIT 

pragma solidity ^0.8.0;

import "./PeopleStorage.sol";

contract PeopleStorageFactory  {

    PeopleStorage[] private peopleStorageArray;

    function createPeopleStorage () public {
        PeopleStorage peopleStorage = new PeopleStorage();
        peopleStorageArray.push(peopleStorage);
    }

    function getPeopleStorage (uint _index) public view returns (address) {
        return address(peopleStorageArray[_index]);
    }

    function getPeopleStorageCount () public view returns (uint) {
        return peopleStorageArray.length;
    }

    function addPerson(uint256 _storeIndex, string memory _name, uint256 _age) public {
        PeopleStorage peopleStorage = _getStorage(_storeIndex);
        peopleStorage.addPerson(_name, _age);
    }

    function getPerson(uint256 _storageIndex, uint256 _personIndex)view public returns(string memory, uint256){
        PeopleStorage peopleStorage = _getStorage(_storageIndex);
        return peopleStorage.getPerson(_personIndex);
    } 

    function _getStorage(uint256 _index) view private returns(PeopleStorage) {
        return PeopleStorage(address(peopleStorageArray[_index]));
    }
}