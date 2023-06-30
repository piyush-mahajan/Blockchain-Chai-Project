const hre = require("hardhat");

async function main() {
  // fetching the artifact from smart contract
  const Chai = await hre.ethers.getContractFactory("chai"); //fetching bytecode and ABI
  const chai = await Chai.deploy(); //freating an instance of our smart contract
  await chai.deployed();
  console.log("Deployed contract address:", `${chai.address}`);
}
// const Chai = await hre.ethers.deployContract("chai", [unlockTime], {
//   value: lockedAmount,
// });

// await chai.waitForDeployment();

// console.log(
//   `Lock with ${ethers.formatEther(
//     lockedAmount
//   )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
// );

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
