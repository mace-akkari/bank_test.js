class Account {
  constructor(balance = 0) {
    this.balance = balance;
    this.transactionHistory = [];
  }

  deposit(amount) {
    this.balance += amount;
  }
  
  withdraw(amount) {
    let lowBalance = this.balance - amount <= 0
    lowBalance ? "You're broke mate, try a lower amount" : this.balance -= amount;
  }


}

module.exports = Account;