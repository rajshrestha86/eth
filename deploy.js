const HDWalletProvider=require('truffle-hdwallet-provider');
const Web3=require('web3');
const {interface, bytecode}=require('./compile');
console.log('Creating a provider');
const provider=new HDWalletProvider('buzz result robot east fold attack goddess kit grow exclude debate change',
"https://rinkeby.infura.io/ktfoO2POmn0cOtTxvo2b");
console.log('Provider initialized with an API key.');
const web3=new Web3(provider);
const deploy=async () =>{
  const accounts=await web3.eth.getAccounts();
  console.log('Attempting to deply from account ', accounts[0]);
//  We should know where the contract is deployed.
  // const result=await new web3.eth.Contract(JSON.parse(interface))
  // .deploy({data:bytecode, arguments: ['Hi there !']})
  // .send({from: accounts[0], gas: '1000000'});
};
