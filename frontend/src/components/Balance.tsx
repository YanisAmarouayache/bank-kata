
import { Card, CardContent, Typography } from "@mui/material";

const Balance = ({ balance }: { balance: number }) => {


    return (
        <Card variant='outlined'>
            <Typography textAlign="center"  sx={{backgroundColor: "#f5f5f5", borderBottom: "1px solid #ddd" }} padding={1} variant="h5">Balance</Typography>
            <CardContent>    
                <Typography textAlign="center" variant="h4" color="primary">€{balance}</Typography>
            </CardContent>
        </Card>
    )
}

export default Balance;