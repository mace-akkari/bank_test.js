const Account = require('../src/account');
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

describe("#withdraw", () => {
  it("updates account balance with the withdrawn amount", () => {
    const formatTransactionSpy = jest.spyOn(Transaction.prototype, 'formatTransaction').mockImplementation((credit, debit, balance) => {
      return '30/09/2020 || || 15.00 || 15.00'
    })
    let userAccount = new Account();
    userAccount.balance = 30;
    userAccount.withdraw(15);
    expect(userAccount.balance).toEqual(15);
  });
  it("adds withdrawal to transaction history", () => {
    const formatTransactionSpy = jest.spyOn(Transaction.prototype, 'formatTransaction').mockImplementation((credit, debit, balance) => {
      return '30/09/2020 || || 20.00 || -5.00'
    })
    let userAccount = new Account();
    userAccount.withdraw(20);
    expect(userAccount.transactionHistory).toEqual([
      "30/09/2020 || || 20.00 || -5.00",
    ]);

  });

  describe("#statement", () => {
    it("retunrs transaction history on a table format", () => {
      const formatTransactionSpy = jest.spyOn(Account.prototype, 'statement').mockImplementation((credit, debit, balance) => {
        return "date || credit || debit || balance\n" +
        "06/12/2020 || 30.00 || || 30.00\n" +
        "08/12/2020 || 30.00 || || 60.00\n" +
        "12/12/2020 || 30.00 || || 90.00\n" +
        "22/12/2020 || || 30.00 || 60.00\n"
  
      })
      let userStatment = new Account();
      expect(userStatment.statement()).toEqual(
        "date || credit || debit || balance\n" +
          "06/12/2020 || 30.00 || || 30.00\n" +
          "08/12/2020 || 30.00 || || 60.00\n" +
          "12/12/2020 || 30.00 || || 90.00\n" +
          "22/12/2020 || || 30.00 || 60.00\n"
      );
    });
  });


});