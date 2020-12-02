class Transaction {
    constructor(balance = 0, amount, type) {
      this.date = new Date(Date.now()).toLocaleDateString();
      this.balance = balance;
      this.amount = amount;
      this.type = type;
  }
}

module.exports = Transaction;