import { Account } from "../models/Account";
import { Transaction } from "../models/Transaction";

export class BankService {
    private account = new Account();
    deposit(amount: number) {
        this.account.deposit(amount);
    }
    withdraw(amount: number) {
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
