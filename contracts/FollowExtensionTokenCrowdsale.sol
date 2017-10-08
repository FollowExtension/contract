pragma solidity ^0.4.13;

import 'zeppelin-solidity/contracts/crowdsale/CappedCrowdsale.sol';
import 'zeppelin-solidity/contracts/crowdsale/Crowdsale.sol';
import './FollowExtensionToken.sol';

contract FollowExtensionTokenCrowdsale is CappedCrowdsale {
  function FollowExtensionTokenCrowdsale(uint256 _cap, uint256 _startTime, uint256 _endTime, uint256 _rate, address _wallet) CappedCrowdsale(_cap) Crowdsale(_startTime, _endTime, _rate, _wallet) {
    token.mint(wallet, 5000000); // 2,000,000(for team) + 3,000,000(for official sale)
  }

  function createTokenContract() internal returns (MintableToken) {
    return new FollowExtensionToken();
  }
}