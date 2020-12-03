const Transaction = require('./transactions');

class Account {
  constructor(balance = 0) {
    this.balance = balance;
    this.transactionHistory = [];
  }

  deposit(amount) {
    this.balance += amount;
    const credit = new Transaction(amount, 0, this.balance);
    this.transactionHistory.push(credit.formatTransaction());
  }
  
  withdraw(amount) {
    this.balance -= amount;
    const debit = new Transaction(null, amount, this.balance);
    this.transactionHistory.push(debit.formatTransaction());
  }

}

module.exports = Account;