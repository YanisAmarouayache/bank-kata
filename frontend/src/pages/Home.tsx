import { useEffect, useState } from 'react';
import { Container, Snackbar, Alert, Grid2 } from '@mui/material'; // Import necessary components
import Balance from '../components/Balance';
import { Statement } from '../components/History';
import History from '../components/History';
import Transactions from '../components/Transactions';
import { getBalance, printStatements, deposit, withdraw } from '../services/bank-api';
import BasicLineChart from '../components/Chart';

function App() {
    const [withdrawAmount, setWithdrawAmount] = useState(0);
    const [depositAmount, setDepositAmount] = useState(0);
    const [balance, setBalance] = useState(0);
    const [statements, setStatements] = useState<Statement[]>([]);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const fetchedBalance = await getBalance();
            const fetchedStatements = await printStatements();
            setBalance(fetchedBalance);
            setStatements(fetchedStatements);
        } catch (error) {
            showSnackbar('Error fetching data', 'error');
        }
    };
    const handleInputChange = (
        setAmount: React.Dispatch<React.SetStateAction<number>>,
    ) => (e: React.ChangeEvent<HTMLInputElement>) => setAmount(Number(e.target.value));

    const handleTransaction = async (type: "deposit" | "withdrawal") => {
        try {
            if (type === "deposit") {
                await deposit(depositAmount);
                setDepositAmount(0);
            } else if (type === "withdrawal") {
                await withdraw(withdrawAmount);
                setWithdrawAmount(0);
            }
            await fetchData();
            showSnackbar(`${type === "deposit" ? 'Deposit' : 'Withdrawal'} successful`, 'success');
        } catch (error: any) {
            showSnackbar(`Error during ${type}: ${error.message}`, 'error');
        }
    };

    const showSnackbar = (message: string, severity: 'success' | 'error') => {
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setSnackbarOpen(true);
    };

    const handleCloseSnackbar = (_event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    return (
        <Container>
            <Grid2 container spacing={4} >
                <Grid2 size={12}>
                    <Transactions depositAmount={depositAmount} withdrawAmount={withdrawAmount} handleDeposit={handleInputChange(setDepositAmount)} handleWithdrawal={handleInputChange(setWithdrawAmount)} handleTransaction={handleTransaction} />
                </Grid2>
                <Grid2 size={12}>
                    <Balance balance={balance} />
                </Grid2>
                <Grid2 size={12} container justifyContent="center" alignItems="flex-start" spacing={4}>
                    <Grid2  size={6}>
                        <History statements={statements} />
                    </Grid2>
                    <BasicLineChart statements={statements} />
                </Grid2>
            </Grid2>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
            >
                <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Container>
    );
}

export default App;
