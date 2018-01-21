const MultisigWalletWithoutDailyLimit = artifacts.require('MultiSigWallet.sol')

module.exports = deployer => {
  deployer.deploy(MultisigWalletWithoutDailyLimit, ['0x4583408F92427C52D1E45500Ab402107972b2CA6', '0x8a2454C1c79C23F6c801B0c2665dfB9Eab0539b1'], 2)
  return deployer.deploy(MultisigWalletWithoutDailyLimit, ['0x4583408F92427C52D1E45500Ab402107972b2CA6', '0x8a2454C1c79C23F6c801B0c2665dfB9Eab0539b1'], 2)
}
