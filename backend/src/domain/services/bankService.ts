import { Account } from "../models/Account";
import { Transaction } from "../models/Transaction";

export class BankService {
  private account = new Account();
  deposit(amount: number) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be greater than zero.");
    }
    this.account.deposit(amount);
  }
  withdraw(amount: number) {
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be greater than zero.");
    }

    const balance = this.getBalance();
    if (amount > balance) {
      throw new Error("Insufficient funds.");
    }

    this.account.withdraw(amount);
  }

  printStatements() {
    let balance = 0;
    const statements: { date: Date, transaction: "DEPOSIT" | "WITHDRAWAL"; amount: number; balance: number; }[] = [];
    this.account.getHistory().forEach((transaction: Transaction) => {
      balance += transaction.amount;
      statements.push({date: transaction.date, transaction : transaction.type, amount: transaction.amount, balance: balance})
    })
    return statements;
  }

  getBalance() {
    return this.account.getBalance();
  }
}
