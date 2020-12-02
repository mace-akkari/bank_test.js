const Transaction = require('../src/transactions');

const userTransaction = new Transaction(0, 300, null);

test('transactions have a date', () => {
  const today = new Date(Date.now());
  expect(userTransaction.date).toEqual(today.toLocaleDateString());
});

test('a transaction has a starting balance 0', () => {
  expect(userTransaction.balance).toBe(0);
});

test('single transactions have an amount', () => {
  expect(userTransaction.amount).toBe(300);
});

test('debit transactions to have type debit', () => {
  const userTransaction = new Transaction(null, 1, 'debit');
  expect(userTransaction.type).toBe('debit');
});

test('credit transactions have type credit', () => {
  const userTransaction = new Transaction(null, 1, 'credit');
  expect(userTransaction.type).toBe('credit');
});
