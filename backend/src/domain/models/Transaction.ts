export class Transaction {
    constructor(
        public amount: number, 
        public date: Date, 
        public type: 'DEPOSIT' | 'WITHDRAWAL') 
        {}
}