import { useEffect, useState } from 'react';
import Balance from './components/Balance'
import Transactions from './components/Transactions'
import History, { Statement } from './components/History';
import { deposit, getBalance, printStatements, withdraw } from './services/bank-api';

function App() {
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [depositAmount, setDepositAmount] = useState(0);
  const [balance, setBalance] = useState(0);

  const [statements, setStatements] = useState<Statement[]>([]);
  useEffect(() => { }, [])


  useEffect(() => { refetchBalance() }, [])

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
    <div>
      <Transactions depositAmount={depositAmount} withdrawAmount={withdrawAmount} handleDeposit={handleDeposit} handleWithdrawal={handleWithdrawal} handleTransaction={handleTransaction} />
      <Balance balance={balance} />
      <History statements={statements} />
    </div>
  )
}

export default App
