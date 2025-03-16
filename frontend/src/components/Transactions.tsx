import { Button, Card, Grid2, InputAdornment, TextField, Typography } from "@mui/material"

interface TransactionProps {
    depositAmount: number;
    withdrawAmount: number;
    handleDeposit: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleWithdrawal: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleTransaction: (type: "deposit" | "withdrawal") => void;
}

const Transactions: React.FC<TransactionProps> = ({ depositAmount, withdrawAmount, handleDeposit, handleWithdrawal, handleTransaction }) => {
    return (
        <Grid2 container justifyContent={"center"}
            direction="row" spacing={2}>
            <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: "center" }}>
                <Typography padding={3} variant="h4">
                    Deposit
                </Typography>
                <TextField
                    slotProps={{
                        input: {
                            startAdornment: <InputAdornment position="start">€</InputAdornment>,
                        },
                    }}
                    value={depositAmount}
                    type="number"
                    onChange={handleDeposit}
                    label="Amount" />
                <Button style={{ padding: 2 }} onClick={() => handleTransaction('deposit')} variant="contained" color="primary">
                    Deposit Funds
                </Button>
            </Card>
            <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: "center" }}>
                <Typography padding={3} variant="h4">
                    Withdraw
                </Typography>
                <TextField
                    slotProps={{
                        input: {
                            startAdornment: <InputAdornment position="start">€</InputAdornment>,
                        },
                    }}
                    value={withdrawAmount}
                    type="number"
                    onChange={handleWithdrawal}
                    label="Amount" />
                <Button style={{ padding: 2 }} onClick={() => handleTransaction('withdrawal')} variant="contained" color="primary">
                    Withdraw Funds
                </Button>
            </Card>
        </Grid2>
    )
}

export default Transactions;