import { Card } from "@mui/material";

export interface Statement {
    transaction: "DEPOSIT" | "WITHDRAWAL"
    amount: number;
    balance: number;
}

const History = ({ statements }: { statements: Statement[] }) => {
    return (
        <Card>
            <h2>History</h2>
            {statements.length > 0 && statements.map((statement, index) => (
                <div key={index}>
                    <p>Transaction: {statement.transaction}</p>
                    <p>Amount: {statement.amount}</p>
                    <p>Balance: {statement.balance}</p>
                </div>
            ))}
        </Card>
    );
}

export default History;