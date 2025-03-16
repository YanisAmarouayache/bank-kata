import { Card, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

export interface Statement {
    transaction: "DEPOSIT" | "WITHDRAWAL"
    amount: number;
    balance: number;
}

const History = ({ statements }: { statements: Statement[] }) => {
    return (
        <Card sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }} variant="outlined">
            <Typography textAlign="center" variant="h5">History</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
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
                                <TableCell component="th" scope="row">
                                    {statement.transaction}
                                </TableCell>
                                <TableCell>{statement.amount}</TableCell>
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