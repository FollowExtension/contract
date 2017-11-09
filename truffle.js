module.exports = {
  rpc: {
    host: 'localhost',
    port: '8545'
  },
  networks: {
    "live": {
      network_id: "*",
      host: "localhost",
      port: 8545,
      gas: 4712388
    },
    development: {
      host: "localhost",
      port: 8547,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: "localhost", // Connect to geth on the specified
      port: 8546,
      from: "0xb3b367e180bc0822e1f936eb9db80283539fd387", // default address to use for any transaction Truffle makes during migrations
      network_id: 4,
      gas: 4612388 // Gas limit used for deploys
    }
  }
};
