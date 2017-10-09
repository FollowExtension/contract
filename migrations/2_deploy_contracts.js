const FollowExtensionTokenCrowdsale = artifacts.require("./FollowExtensionTokenCrowdsale.sol")

module.exports = function(deployer, network, accounts) {
  const startTime = web3.eth.getBlock(web3.eth.blockNumber).timestamp + 100 // 100 second in the future
  const endTime = startTime + (86400 * 7) // 7 days
  const presaleAmount = 5000000
  const rate = new web3.BigNumber(875)  // 1 ETH = 875 TOKEN, ethPriceInWon / 400
  const ethInWei = 1000000000000000000
  const cap = presaleAmount / rate * ethInWei
  const wallet = accounts[0]

  deployer.deploy(FollowExtensionTokenCrowdsale, cap, startTime, endTime, rate, wallet)
};