//SPDX-License-Identifier: MIT 

pragma solidity ^0.8.0;

contract PeopleStorage {

    struct Person {
        string name;
        uint age;
    }

    Person[] private people;

    function addPerson (string memory _name, uint _age) public {
        people.push(Person(_name,_age));
    }

    function getPerson (uint _index) public view returns (string memory, uint256) {
        return (people[_index].name, people[_index].age);
    }
}