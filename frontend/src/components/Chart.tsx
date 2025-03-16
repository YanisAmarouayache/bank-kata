import { LineChart } from '@mui/x-charts/LineChart';
import { Statement } from './History';
import { Card, Typography } from '@mui/material';

interface BalanceChartProps {
    statements: Statement[];
}

export default function BalanceChart({ statements }: BalanceChartProps) {
    const xAxisData = statements.map((_, index) => index);
    const data = statements.map(statement => statement.balance);

    return (
        <Card sx={{ height: 300, overflow: 'auto', display: 'flex', justifyContent: 'center', flexDirection: 'column' }} variant="outlined">
            <Typography textAlign="center" variant="h5">Chart</Typography>
            <LineChart
                xAxis={[{ data: xAxisData, label: 'Operations' }]}
                series={[{ data, label: 'Balance' }]}
                width={500}
                height={300}
                grid={{ vertical: true, horizontal: true }}
            />
        </Card>
    );
}
