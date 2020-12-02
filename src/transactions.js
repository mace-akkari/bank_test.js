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

  formatTransaction() {
    if (typeof this.credit == "number") {
      return `${this.date} || ${this.credit.toFixed(2)} || || ${this.balance.toFixed(2)}`;
    }else (typeof debit === "number") 
      return `${this.date} || || ${this.debit.toFixed(2)} || ${this.balance.toFixed(2)}`;
    }
}


module.exports = Transaction;