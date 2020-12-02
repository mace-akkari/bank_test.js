class Transaction {
    constructor(amount, credit, debit, balance,) {
      this.date = new Date(Date.now()).toLocaleDateString();
      this.amount = amount;
      this.debit = debit;
      this.credit = credit;
      this.balance = balance;
  }

  getTransaction() {
    return {
      date: this. date,
      credit: this.credit,
      debit: this.debit,
      balance: this.balance
    }; 
  };

}


module.exports = Transaction;