// SPDX-License-Identifier: GPL
pragma solidity ^0.8.10;

contract KolumnKontract {
    //Kolumn Structure
    struct Kolumn {
        string title;
        string content;
    }

    uint256 public kolumnKount = 0;
    mapping(uint256 => Kolumn) public kolumns;

    //Add a new Kolumn
    function createKolumn(string memory _title, string memory _content) public {
        kolumnKount++;
        kolumns[kolumnKount] = Kolumn(_title, _content);
    }

    //View Kolumn by ID
    function viewKolumn(uint256 _id)
        public
        view
        returns (string memory _title, string memory _content)
    {
        _title = kolumns[_id].title;
        _content = kolumns[_id].content;
    }
}
