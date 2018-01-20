var ethereumjsWallet = require('ethereumjs-wallet');
var ProviderEngine = require("web3-provider-engine");
var WalletSubprovider = require('web3-provider-engine/subproviders/wallet.js');
var Web3Subprovider = require("web3-provider-engine/subproviders/web3.js");
var Web3 = require("web3");
var FilterSubprovider = require('web3-provider-engine/subproviders/filters.js');

// create wallet from existing private key
var privateKey = 'e203d9d003a557a1203a5b3ab7689c2912da5143de033dbebcbac58a9744fa26';
var wallet = ethereumjsWallet.fromPrivateKey(new Buffer(privateKey, "hex"));
var address = "0x" + wallet.getAddress().toString("hex");

// using ropsten testnet
var providerUrl = "https://rinkeby.infura.io/jqp7LrTFessh6wlnHYAP";
var engine = new ProviderEngine();

// filters
engine.addProvider(new FilterSubprovider());
engine.addProvider(new WalletSubprovider(wallet, {}));
engine.addProvider(new Web3Subprovider(new Web3.providers.HttpProvider(providerUrl)));
engine.start(); // Required by the provider engine.

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8547,
      network_id: "*" // Match any network id
    },
    infuraRinkeby: {
      network_id: 4,    // Official ropsten network id
      provider: engine, // Use our custom provider
      from: address     // Use the address we derived
    },
  }  
};