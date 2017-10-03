pragma solidity ^0.4.13;

import 'zeppelin-solidity/contracts/token/MintableToken.sol';

contract FollowExtensionToken is MintableToken {
  string public name = "Follow Extension Token";
  string public symbol = "FOLLOW";
  uint256 public decimals = 18;
}