import { useEffect, useState } from 'react';
import { Container, Grid2 } from '@mui/material';
import Balance from '../components/Balance';
import { Statement } from '../components/History';
import History from '../components/History';
import Transactions from '../components/Transactions';
import { getBalance, printStatements, deposit, withdraw } from '../services/bank-api';

function App() {
    const [withdrawAmount, setWithdrawAmount] = useState(0);
    const [depositAmount, setDepositAmount] = useState(0);
    const [balance, setBalance] = useState(0);

    const [statements, setStatements] = useState<Statement[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const fetchedBalance = await getBalance();
            const fetchedStatements = await printStatements();
            setBalance(fetchedBalance);
            setStatements(fetchedStatements);
        };

        fetchData();
    }, [])

    const handleDeposit = (e: React.ChangeEvent<HTMLInputElement>) => setDepositAmount(Number(e.target.value))
    const handleWithdrawal = (e: React.ChangeEvent<HTMLInputElement>) => setWithdrawAmount(Number(e.target.value))

    const handleTransaction = (type: "deposit" | "withdrawal") => {
        if (type === "deposit") {
            deposit(depositAmount).then(refetchBalance).then(refecthStatements).catch(error => console.error(error))
            setDepositAmount(0);
        }
        if (type === "withdrawal") {
            withdraw(withdrawAmount).then(refetchBalance).then(refecthStatements).catch(error => console.error(error));
            setWithdrawAmount(0);
        }
    }

    const refetchBalance = () => getBalance().then(response => setBalance(response))

    const refecthStatements = () => printStatements().then((response) => setStatements(response))


    return (
        <Container>
            <Grid2 container spacing={4} >
                <Grid2 size={12}>
                    <Transactions depositAmount={depositAmount} withdrawAmount={withdrawAmount} handleDeposit={handleDeposit} handleWithdrawal={handleWithdrawal} handleTransaction={handleTransaction} />
                </Grid2>
                <Grid2 size={12}>
                    <Balance balance={balance} />
                </Grid2>
                <Grid2 size={12}>
                    <History statements={statements} />
                </Grid2>
            </Grid2>
        </Container>
    );
}

export default App
