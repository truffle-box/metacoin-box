var MetaCoin = artifacts.require("./MetaCoin.sol");

contract('MetaCoin', function(accounts) {
  it("should put 10000 MetaCoin in the first account", async function() {
    var meta = await MetaCoin.deployed();
    var balance = await meta.getBalance.call(accounts[0]);
    assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
    return true;
  });
  it("should call a function that depends on a linked library", async function() {
    var meta = await MetaCoin.deployed();
    var metaCoinBalance = (await meta.getBalance.call(accounts[0])).toNumber();
    var metaCoinEthBalance = (await meta.getBalanceInEth.call(accounts[0])).toNumber();

    assert.equal(metaCoinEthBalance, 2 * metaCoinBalance, "Library function returned unexpected function, linkage may be broken");
    
    return true;
  });
  it("should send coin correctly", async function() {
    var meta = await MetaCoin.deployed();
    var account_one = accounts[0];
    var account_two = accounts[1];

    var amount = 10;
    
    // Get initial balances of first and second account.
    var account_one_starting_balance = (await meta.getBalance.call(account_one)).toNumber();
    var account_two_starting_balance = (await meta.getBalance.call(account_two)).toNumber();

    // Transfer the amount of coins defined from the first to the second account.
    await meta.sendCoin(account_two, amount, {from: account_one});
    
    // Get ending balances of first and second account.
    var account_one_ending_balance = (await meta.getBalance.call(account_one)).toNumber();
    var account_two_ending_balance = (await meta.getBalance.call(account_two)).toNumber();

    assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't correctly taken from the sender");
    assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't correctly sent to the receiver");
    
    return true;
  });
});
