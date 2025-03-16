import { Request, Response } from "express";
import { BankService } from "../../domain/services/bankService";
const bankService = new BankService();

export const getBalance = (req: Request, res: Response) => {
    res.json({ balance: bankService.getBalance() });
}

export const depositMoney = (req: Request, res: Response) => {
    const { amount } = req.body;
    if (!isValidAmount(amount)) {
        res.status(400).json({ message: "Invalid deposit amount" });
    }
    try {
        bankService.deposit(amount);
        res.json({ message: "Deposit successful", newBalance: bankService.getBalance() });
    }
    catch (error) {
       handleError(res, error, "An error occurred during deposit");
    }
}

export const withdrawMoney = (req: Request, res: Response) => {
    const { amount } = req.body;
    if (!isValidAmount(amount)) {
        res.status(400).json({ message: "Invalid withdrawal amount" });
    }
    if (bankService.getBalance() < amount) {
        res.status(400).json({ message: "Insufficient funds" });
    }
    try {
        bankService.withdraw(amount);
        res.json({ message: "Withdrawal successful", newBalance: bankService.getBalance() });
    }
    catch (error) {
        handleError(res, error, "An error occurred during withdrawal");
    }
}

export const printStatements = (req: Request, res: Response) => {
    res.json(bankService.printStatements());
}

function isValidAmount(amount: any): boolean {
    return typeof amount === 'number' && amount > 0;
}

function handleError(res: Response, error: any, message: string) {
    const err = error as Error;
    res.status(500).json({ message, error: err.message });
    console.error(message, error);
}