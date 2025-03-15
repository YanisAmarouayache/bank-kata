import { useEffect, useState } from "react";
import { getBalance } from "../services/bank-api";
import { Card, CardContent, Typography } from "@mui/material";

const Balance = () => {
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        getBalance().then(response => setBalance(response));
    }, [])

    return (
        <Card>
            <CardContent>
                <Typography variant="h5">Solde :</Typography>
                <Typography variant="h3">{balance}</Typography>
            </CardContent>
        </Card>
    )
}

export default Balance;