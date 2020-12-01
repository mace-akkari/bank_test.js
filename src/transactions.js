class Transaction {
    constructor(balance = 0) {
      this.date = new Date(Date.now()).toLocaleDateString();
      this.balance = balance
  }
}

module.exports = Transaction;