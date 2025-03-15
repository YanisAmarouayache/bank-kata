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
    
    printStatement(){
        let balance=0;
        this.account.getHistory().forEach((transaction: Transaction) => {
            balance += transaction.amount;
            console.log(`Transaction: ${transaction.type}, Amount: ${transaction.amount}, Balance: ${balance}`)
        })    
    }

    getBalance() {
        return this.account.getBalance();
    }
}
