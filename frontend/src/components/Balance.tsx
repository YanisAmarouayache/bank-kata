
import { Card, CardContent, Typography } from "@mui/material";

const Balance = ({ balance }: { balance: number }) => {


    return (
        <Card variant='outlined'>
            <CardContent >
                <Typography textAlign="center" variant="h5">Balance</Typography>
                <Typography textAlign="center" variant="h4" color="primary">€{balance}</Typography>
            </CardContent>
        </Card>
    )
}

export default Balance;