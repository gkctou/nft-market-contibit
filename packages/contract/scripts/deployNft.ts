import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp'
import { ethers, artifacts, network } from "hardhat";

// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.
async function main() {
  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
      "gets automatically created and destroyed every time. Use the Hardhat" +
      " option '--network localhost'"
    );
  }

  // ethers is available in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const NFT = await ethers.getContractFactory("NFT");
  const nft = await NFT.deploy();
  await nft.deployed();

  console.log("Contract address:", nft.address);

  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(nft);
}

function saveFrontendFiles(nft) {
  // const fs = require("fs");
  // const path = require('path');
  // const contractsDir = __dirname + "/../frontend/src/contracts";
  // const contractsDir = path.resolve(__dirname, "../../frontend/src/contracts");
  const contractsDir = path.resolve(__dirname, "../deploy/NFT");
  if (!fs.existsSync(contractsDir)) {
    // fs.mkdirSync(contractsDir);
    mkdirp.sync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + "/contract-address.json",
    JSON.stringify({ contract: nft.address }, undefined, 2)
  );

  const NFTArtifact = artifacts.readArtifactSync("NFT");

  fs.writeFileSync(
    contractsDir + "/NFT.json",
    JSON.stringify(NFTArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
