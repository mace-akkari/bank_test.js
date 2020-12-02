const Transaction = require('../src/transactions');

const userTransaction = new Transaction(300, null, null, 0);

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
  const userTransaction = new Transaction(1, null, 'debit', null);
  expect(userTransaction.debit).toBe('debit');
});

test('credit transactions have type credit', () => {
  const userTransaction = new Transaction(1, 'credit', null, null);
  expect(userTransaction.credit).toBe('credit');
});

test('returns the transactions statment', () => {
  date = "02/12/2020";
  userTransaction.credit = 300;
  expect(userTransaction.getTransaction()).toEqual({
    date: "02/12/2020",
    credit: 300,
    debit: null,
    balance: 0
  });
});

describe('formats the credit and debit transaction into a string', () => { 
  test('creates a credit transaction into a string', () => {
    date = "02/12/2020";
    let creditTransaction = new Transaction(0, 200, null, 500);
    expect(creditTransaction.formatTransaction()).toEqual(
      "02/12/2020 || 200.00 || || 500.00")
  });
  test('creates a debit transaction into a string', () => {
    date = "02/12/2020";
    let creditTransaction = new Transaction(0, null, 100, 400);
    expect(creditTransaction.formatTransaction()).toEqual(
      "02/12/2020 || || 100.00 || 400.00")
  });

});
  

