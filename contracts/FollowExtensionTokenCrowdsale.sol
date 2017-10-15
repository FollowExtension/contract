pragma solidity ^0.4.13;

import 'zeppelin-solidity/contracts/crowdsale/CappedCrowdsale.sol';
import 'zeppelin-solidity/contracts/crowdsale/Crowdsale.sol';
import 'zeppelin-solidity/contracts/math/SafeMath.sol';
import './FollowExtensionToken.sol';

contract FollowExtensionTokenCrowdsale is CappedCrowdsale {
  using SafeMath for uint256;
  uint256 public personalCap;

  function FollowExtensionTokenCrowdsale(uint256 _cap, uint256 _personalCap, uint256 _startTime, uint256 _endTime, uint256 _rate, address _wallet)
    CappedCrowdsale(_cap)
    Crowdsale(_startTime, _endTime, _rate, _wallet)
    {
    require(_personalCap > 0);
    personalCap = _personalCap;
    token.mint(wallet, 5000000 * 1000000000000000000); // 2,000,000(for team) + 3,000,000(for official sale)
  }

  function createTokenContract() internal returns (MintableToken) {
    return new FollowExtensionToken();
  }

  function validPurchase() internal constant returns (bool) {
    uint256 weiAmount = msg.value;
    uint256 tokens = weiAmount.mul(rate);
    bool withinPersonalCap = token.balanceOf(msg.sender).add(tokens) <= personalCap;
    return super.validPurchase() && withinPersonalCap;
  }
}