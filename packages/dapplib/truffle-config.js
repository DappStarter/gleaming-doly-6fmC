require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess glimpse flame suspect notice crime remain mistake hockey sister army gas'; 
let testAccounts = [
"0x2262f10385ea4ee3e839c17f9a67e6084e209548072c84bd91f58d6af2b38c5d",
"0x7854634b5a791894f3ef0bb6ee1c1182896f703efd6eacea9cf446b93600a486",
"0xc8d5a4f745a16ca1c5d60a3ab4509b16315afc7f9431c6d9f5059245877617ee",
"0x5dcc04c4edd4d43c7d240238782712805c43984fedd6137430272392f9c8be25",
"0xf6882bb247db2c5ea0be7ae32d04eae1e2d41997c055169575a27c7cb209f223",
"0xa144f4339408b76392a59a2336b56176f19aaea6459e274a4d908c6f36f0ae8d",
"0xa22befbea9098c5a15e33add983fc4d439b801ee6f187393abaad2a1d836998c",
"0x72e1341f0fed8b65078b059827b19edd1a087affc8e553509354fda1394c4c11",
"0x980cc36c3258a6ce13fbc9611bddd31a0b4f0670883225b214e89050c7caaec9",
"0x039c08a4b032fa633163cedea1dc90bfcf9945064d94014d6d53e4b4d7b5d3f3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

