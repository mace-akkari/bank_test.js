const Account = require('../src/account');
const sinon = require("sinon");
const Transaction = require('../src/transactions');


const userAccount = new Account();

test('has a balance of 0 when opened', () => {
  expect(userAccount.balance).toBe(0);
});

test('has no transaction history ', () => {
  expect(userAccount.transactionHistory).toEqual([]);
});


test('withdrawal on balance of below 0 denied', () => {
  expect(() => userAccount.withdraw(60).toEqual("You're broke mate, try a lower amount"));
});

describe("#deposit", () => {
  it("updates account balance with the deposit amount", () => {
    const formatTransactionSpy = jest.spyOn(Transaction.prototype, 'formatTransaction').mockImplementation((credit, debit, balance) => {
      return '09/09/2020 || 15.00 || || 15.00'
    })
    userAccount.deposit(15);
    expect(userAccount.balance).toEqual(15);
  });
  it("adds transaction to transaction history with updated balance", () => {
    const userAccount = new Account();
    const formatTransactionSpy = jest.spyOn(Transaction.prototype, 'formatTransaction').mockImplementation((credit, debit, balance) => {
      return '02/02/2020 || 15.00 || || 15.00'
    })
    userAccount.deposit(15);
    expect(userAccount.transactionHistory).toEqual([
      "02/02/2020 || 15.00 || || 15.00",
    ]);
  });
});
