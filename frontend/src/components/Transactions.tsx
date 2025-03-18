import { Button, Card, CardActions, CardContent, Grid2, InputAdornment, TextField, Typography } from "@mui/material"

interface TransactionProps {
    depositAmount: number;
    withdrawAmount: number;
    handleDeposit: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleWithdrawal: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleTransaction: (type: "deposit" | "withdrawal") => void;
}

const Transactions: React.FC<TransactionProps> = ({ depositAmount, withdrawAmount, handleDeposit, handleWithdrawal, handleTransaction }) => {
    return (
        <Grid2 container textAlign="center" justifyContent={"center"} marginTop={2} direction="row" spacing={2}>
            <Card variant="outlined">
                <Typography sx={{ padding: 1, backgroundColor: "#f5f5f5", borderBottom: "1px solid #ddd" }} padding={3} variant="h5">
                    Deposit
                </Typography>
                <CardContent>
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
                </CardContent>
                <CardActions style={{ justifyContent: "center" }}>
                    <Button style={{ padding: 2 }} onClick={() => handleTransaction('deposit')} variant="contained" color="primary">
                        Deposit Funds
                    </Button>
                </CardActions>
            </Card>
            <Card variant="outlined">
                <Typography sx={{ padding: 1, backgroundColor: "#f5f5f5", borderBottom: "1px solid #ddd" }} padding={3} variant="h5">
                    Withdraw
                </Typography>
                <CardContent>
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
                </CardContent>
                <CardActions style={{ justifyContent: "center" }}>
                    <Button style={{ padding: 2 }} onClick={() => handleTransaction('withdrawal')} variant="contained" color="primary">
                        Withdraw Funds
                    </Button>
                </CardActions>
            </Card>
        </Grid2>
    )
}

export default Transactions;