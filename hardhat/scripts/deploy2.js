const {ethers} = require("hardhat");
require("dotenv").config({path:".env"});
const {WHITELIST_CONTRACT_ADDRESS, METADATA_URL} = require("../constants");

async function main() {
    const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
    const metadataURL = METADATA_URL;

    const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs");
    const deployedCryptoDevsContract = await cryptoDevsContract.deploy(
        metadataURL, whitelistContract
    );
    const [owner] = await ethers.getSigners()
    // 0xf37Db292A545D6E1E11c94C9c54b04F8B3bD6D4b
    console.log(
        "Crypto Devs Contract Address",
        deployedCryptoDevsContract.address,
        owner.address
    );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });