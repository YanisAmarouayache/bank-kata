import { Request, Response } from "express";
import { BankService } from "../../domain/services/bankService";
const bankService = new BankService();

export const getBalance = (req: Request, res: Response) => {
    res.json({ balance: bankService.getBalance() });
}

export const depositMoney = (req: Request, res: Response) => {
    const { amount } = req.body;
    if (typeof amount !== 'number' || amount <= 0) {
        res.status(400).json({ message: "Invalid deposit amount" });
    }
    try {
        bankService.deposit(amount);
        res.json({ message: "Deposit successful", newBalance: bankService.getBalance() });
    }
    catch (error) {
        const err = error as Error;
        res.status(500).json({ message: "An error occurred during deposit", error: err.message });
        console.error("Deposit error:", error);
    }
}

export const withdrawMoney = (req: Request, res: Response) => {
    const { amount } = req.body;
    if (typeof amount !== 'number' || amount <= 0) {
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
        const err = error as Error;
        res.status(500).json({ message: "An error occurred during withdrawal", error: err.message });
        console.error("Withdrawal error:", error);
    }
}
