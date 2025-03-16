import { Card, CardContent, Typography } from "@mui/material";

const Balance = ({ balance }: { balance: number }) => {


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