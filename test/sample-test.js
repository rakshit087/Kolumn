const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Kolumn Kontract", () => {
  let KolumnKontract, deployedKolumnKontract, owner, addr1, addr2;
  beforeEach(async () => {
    KolumnKontract = await ethers.getContractFactory("KolumnKontract");
    deployedKolumnKontract = await KolumnKontract.deploy();
    [owner, addr1, addr2, _] = await ethers.getSigners();
  });
  describe("Deployment", () => {
    it("Should be the right Owner", async () => {
      expect(deployedKolumnKontract.deployTransaction.from).is.equal(
        owner.address
      );
    });
  });
  describe("Posting Kolumn", () => {
    it("Kolumn Is Posted", async () => {
      let res = await deployedKolumnKontract.createKolumn(
        "Hello World",
        "This is first contract",
        "123456"
      );
      await res.wait();
      let count = await deployedKolumnKontract.kolumnKount();
      expect(count).is.equal(1);
      res = await deployedKolumnKontract.createKolumn(
        "Hello World 2",
        "This is second contract",
        123456
      );
      await res.wait();
      count = await deployedKolumnKontract.kolumnKount();
      expect(count).is.equal(2);
    });
  });
  describe("Reading Kolumn", () => {
    beforeEach(async () => {
      for (let i = 1; i <= 37; i++) {
        await deployedKolumnKontract.createKolumn(
          "Hello World " + i.toString(),
          "This is article no " + i.toString(),
          123456
        );
      }
    });
    it("Getting Kolumn Kount", async () => {
      let count = await deployedKolumnKontract.kolumnKount();
      expect(count).is.equal(37);
    });
    it("Getting Kolumn by ID", async () => {
      let data = await deployedKolumnKontract.viewKolumn(2);
      expect(data.title).is.equal("Hello World 2");
    });
    it("Getting Latest Kolumns for first time", async () => {
      let data = await deployedKolumnKontract.viewLatestKolumns(1);
      console.log(data[0].title);
      expect(data[0].id).is.equal(37);
      expect(data[1].id).is.equal(36);
    });
    it("Getting Latest Kolumns for second time", async () => {
      let data = await deployedKolumnKontract.viewLatestKolumns(2);
      console.log(data[0].title);
      expect(data[0].id).is.equal(27);
      expect(data[1].id).is.equal(26);
      expect(data.length).is.equal(10);
    });
    it("Getting Latest Kolumns for third time", async () => {
      let data = await deployedKolumnKontract.viewLatestKolumns(3);
      console.log(data[0].title);
      expect(data[0].id).is.equal(17);
      expect(data[1].id).is.equal(16);
      expect(data.length).is.equal(10);
    });
    it("Getting Latest Kolumns for fourth time", async () => {
      let data = await deployedKolumnKontract.viewLatestKolumns(4);
      console.log(data[0].title);
      expect(data[0].id).is.equal(7);
      expect(data[1].id).is.equal(6);
      expect(data.length).is.equal(7);
    });
  });
  // describe("Transfering Ownership", () => {
  //   let KolumnKontract, deployedKolumnKontract, owner, addr1, addr2;
  //   beforeEach(async () => {
  //     KolumnKontract = await ethers.getContractFactory("KolumnKontract");
  //     deployedKolumnKontract = await KolumnKontract.deploy();
  //     [owner, addr1, addr2, _] = await ethers.getSigners();
  //   });
  //   it("Able to transfer owner", async () => {
  //     await deployedKolumnKontract.transferOwnership(addr1.address);
  //     const newowner = await deployedKolumnKontract.owner();
  //     console.log(addr1);
  //     expect(newowner).is.equal(addr1.address);
  //   });
  // });
});
