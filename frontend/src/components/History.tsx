import { Card, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

export interface Statement {
    date: Date;
    transaction: "DEPOSIT" | "WITHDRAWAL"
    amount: number;
    balance: number;
}

const History = ({ statements }: { statements: Statement[] }) => {
    return (
        <Card sx={{ height: 300, width: 500, overflow: 'auto', display: 'flex', justifyContent: 'center', flexDirection: 'column' }} variant="outlined">
            <Typography textAlign="center" variant="h5">History</Typography>
            <TableContainer sx={{}} component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Transaction type</TableCell>
                            <TableCell >Amount</TableCell>
                            <TableCell>Balance</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {statements.length > 0 && statements.map((statement, index) => (
                            <TableRow
                                key={index}
                            >
                                <TableCell>{new Date(statement.date).toLocaleString("fr-FR")}</TableCell>
                                <TableCell>
                                    {statement.transaction}
                                </TableCell>
                                <TableCell sx={{ color: statement.amount > 0 ? "green" : 'red' }}>{statement.amount}</TableCell>
                                <TableCell>{statement.balance}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    );
}

export default History;