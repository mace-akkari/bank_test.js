class Account {
  constructor(balance = 0) {
    this.balance = balance;
    this.transactionHistory = [];
  }

  deposit(amount) {
    this.balance += amount;
  }
  
  withdraw(amount) {
    this.balance -= amount;
  }

}

module.exports = Account;