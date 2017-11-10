const FollowExtensionTokenCrowdsale = artifacts.require("./FollowExtensionTokenCrowdsale.sol")

module.exports = function(deployer, network, accounts) {
  const startTime = web3.eth.getBlock(web3.eth.blockNumber).timestamp + 300 // 300 second in the future
  const endTime = startTime + (86400 * 21) // 21 days
  const presaleAmount = 3000000
  const rate = new web3.BigNumber(800)  // 1 ETH = 800 TOKEN
  const ethInWei = 1000000000000000000
  const cap = presaleAmount / rate * ethInWei
  const wallet = accounts[0]

  deployer.deploy(FollowExtensionTokenCrowdsale, cap, startTime, endTime, rate, wallet)
};