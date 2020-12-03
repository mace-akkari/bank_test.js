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
  
  statement() {
    console.log("date || credit || debit || balance\n");
    for (let transaction of this.transactionHistory) {
      console.log(transaction);
    }
  }

}

module.exports = Account;