const FollowExtensionTokenCrowdsale = artifacts.require("./FollowExtensionTokenCrowdsale.sol")

module.exports = function(deployer, network, accounts) {
  const startTime = web3.eth.getBlock(web3.eth.blockNumber).timestamp + 100 // one second in the future
  const endTime = startTime + (86400 * 10) // 10 days
  const rate = new web3.BigNumber(1000)  // 1 ETH = 1000 TOKEN
  console.log("TEST: " + accounts + " " + network);
  const wallet = accounts[0]

  deployer.deploy(FollowExtensionTokenCrowdsale, 2000000000000000000000, startTime, endTime, rate, wallet)
};