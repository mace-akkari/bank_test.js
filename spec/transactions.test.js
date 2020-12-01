const Transaction = require('../src/transactions');

const userTransaction = new Transaction;

test('a balance of 0 when first opened', () => {
  expect(userTransaction.balance).toBe(0);
});

test('transaction has a date in local format', () => {
  const today = new Date(Date.now());
  expect(userTransaction.date).toEqual(today.toLocaleDateString());
})