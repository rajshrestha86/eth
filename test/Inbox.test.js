const assert=require('assert');
const ganache=require('ganache-cli');
const Web3=require('web3');
const web3=new Web3(ganache.provider());
const { interface, bytecode }=require('../compile');


let accounts;
let Inbox;
beforeEach(async ()=>{
  // Get a list of all accounts

  accounts=await web3.eth.getAccounts();
    //Asynchronous in nature so it returns a promise/
  // Use one of the account to deploy.
  Inbox=await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments: ['Hi']})
    .send({from: accounts[0], gas:'1000000'});
});

describe('Inbox', ()=>{
  it('deploys a contract', ()=>{
    assert.ok(Inbox.options.address);   //Checks if the value is a defined value.
  });

  it('has a default message', async ()=>{
    const message=await Inbox.methods.message().call();
    assert.equal(message, 'Hi');
  });

  it('can change the message', async()=>{
    await Inbox.methods.setMessage('Pandeyji').send({from: accounts[0]});  // Specify who is going to pay the gas
    const message=await Inbox.methods.message().call();
    assert.equal(message, 'Pandeyji');
  });
});
