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
        123456
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
      await deployedKolumnKontract.createKolumn(
        "Hello World",
        "This is first contract",
        123456
      );
      await deployedKolumnKontract.createKolumn(
        "Hello World 2",
        "This is second contract",
        123456
      );
      await deployedKolumnKontract.createKolumn(
        "Hello World 3",
        "This is third contract",
        123456
      );
    });
    it("Getting Kolumn Kount", async () => {
      let count = await deployedKolumnKontract.kolumnKount();
      expect(count).is.equal(3);
    });
    it("Getting Kolumn by ID", async () => {
      let data = await deployedKolumnKontract.viewKolumn(2);
      expect(data._title).is.equal("Hello World 2");
    });
    it("Getting Latest Kolumns", async () => {
      let data = await deployedKolumnKontract.viewLatestKolumns();
      console.log(data[0].title);
      expect(data[0].title).is.equal("Hello World 3");
      expect(data[1].title).is.equal("Hello World 2");
    });
  });
});

//  it("Should return the new greeting once it's changed", async function () {
//    const Greeter = await ethers.getContractFactory("Greeter");
//    const greeter = await Greeter.deploy("Hello, world!");
//    await greeter.deployed();

//    expect(await greeter.greet()).to.equal("Hello, world!");

//    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

//    // wait until the transaction is mined
//    await setGreetingTx.wait();

//    expect(await greeter.greet()).to.equal("Hola, mundo!");
//  });
