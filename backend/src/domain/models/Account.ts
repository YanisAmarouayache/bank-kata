import { Transaction } from "./Transaction";

export class Account {
  private transactions: Transaction[] = [];

  deposit(amount: number): boolean {
    if (amount <= 0) {
      throw new Error("Deposit amount must be greater than zero.");
    }
    this.transactions.push(new Transaction(amount, new Date(), 'DEPOSIT'));
    return true
  }

  withdraw(amount: number): boolean {
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be greater than zero.");
    }
    const balance = this.getBalance();
    if (amount > balance) {
      return false;
    }
    this.transactions.push(new Transaction(-amount, new Date(), 'WITHDRAWAL'));
    return true;
  }

  getBalance(): number {
    return this.transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  }

  getHistory(): Transaction[] {
    return this.transactions;
  }
}
