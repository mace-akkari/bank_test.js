const Account = require('../src/account');

const userAccount = new Account();

test('has a balance of 0 when opened', () => {
  expect(userAccount.balance).toBe(0);
});

test('has no transaction history ', () => {
  expect(userAccount.transactionHistory).toEqual([]);
});

test('depositing £100 changes the balance to 100', () => {
  userAccount.deposit(100);
  expect(userAccount.balance).toBe(100);
});