import { Account } from '../models/Account';
import { Transaction } from '../models/Transaction';
import { BankService } from './bankService';

describe('BankService', () => {
  let bankService: BankService;

  beforeEach(() => {
    bankService = new BankService();
  });

  it('should start with zero balance', () => {
    // Given
    // A new bank service

    // When
    const initialBalance = bankService.getBalance();

    // Then
    expect(initialBalance).toBe(0);
  });

  it('should deposit money and update balance', () => {
    // Given
    // A new bank service

    // When
    bankService.deposit(100);

    // Then
    expect(bankService.getBalance()).toBe(100);
  });

  it('should withdraw money and update balance', () => {
    // Given
    bankService.deposit(100);

    // When
    bankService.withdraw(50);

    // Then
    expect(bankService.getBalance()).toBe(50);
  });

  it('should print transaction statement correctly', () => {
    // Given
    const date = new Date();
    bankService.deposit(200);
    bankService.withdraw(50);
    bankService.deposit(150);

    // When
    const statements = bankService.printStatements();

    // Then
    expect(statements).toEqual([
      {date, transaction: 'DEPOSIT', amount: 200, balance: 200},
      {date, transaction: 'WITHDRAWAL', amount: -50, balance: 150},
      {date, transaction: 'DEPOSIT', amount: 150, balance: 300},
    ]);
  });

  // Edge case: Withdraw more than available balance
  it('should not allow withdrawal more than the balance', () => {
    // Given
    bankService.deposit(100);

    // When & Then
    expect(() => bankService.withdraw(150)).toThrow("Insufficient funds.");
    expect(bankService.getBalance()).toBe(100);
  });

  // Edge case: Deposit negative amount
  it('should not allow deposit of negative amount', () => {
    // Given
    // When & Then
    expect(() => bankService.deposit(-50)).toThrow("Deposit amount must be greater than zero.");
    expect(bankService.getBalance()).toBe(0);
  });

  // Edge case: Withdraw negative amount
  it('should not allow withdrawal of negative amount', () => {
    // Given
    bankService.deposit(100);

    // When & Then
    expect(() => bankService.withdraw(-50)).toThrow("Withdrawal amount must be greater than zero.");
    expect(bankService.getBalance()).toBe(100);
  });

  // Edge case: Zero deposit and withdrawal
  it('should not affect balance on zero deposit or withdrawal', () => {
    // Given
    // When & Then
    expect(() => bankService.deposit(0)).toThrow("Deposit amount must be greater than zero.");
    expect(() => bankService.withdraw(0)).toThrow("Withdrawal amount must be greater than zero.");
    expect(bankService.getBalance()).toBe(0);
  });
});
