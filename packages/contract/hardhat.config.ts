import '@typechain/hardhat';
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
// import "./tasks/faucet";

// If you are using MetaMask, be sure to change the chainId to 1337
module.exports = {
  // solidity: "0.7.3",
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 31337
    },
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/hGDB9QCdmR3OWlysIhIyHqWkyDkUsSrZ',
      accounts: ['bd542c260996fcaf2e60243103b636912434820caf54739429f53a6494711c43'], // 0x8C134A3C3F24978049F7832AE0eF79b1415E4101
    },
    thundercore: {
      url: 'https://mainnet-rpc.thundercore.com',
      accounts: ['bd542c260996fcaf2e60243103b636912434820caf54739429f53a6494711c43'], // 0x8C134A3C3F24978049F7832AE0eF79b1415E4101
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "P9HGHZ6KFM7ITKEYJGBX29G1XHCYSFIMRV"
  },
  typechain: {
    outDir: './build/types',
    target: 'ethers-v5',
    alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
    externalArtifacts: ['externalArtifacts/*.json'], // optional array of glob patterns with external artifacts to process (for example external libs from node_modules)
  },
};
