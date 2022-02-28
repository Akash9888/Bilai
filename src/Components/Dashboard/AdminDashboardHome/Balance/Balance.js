import React from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

const Balance = ({ totalBalance }) => {
    const date = new Date().toDateString();
    let total_amount
        = 0;
    for (const item of totalBalance) {
        total_amount = total_amount + item.total_amount;
    }
    return (
        <div>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography component="h2" variant="h6" color="primary" gutterBottom>
                        Total Sales
                    </Typography>
                    <Typography component="p" variant="h4">
                        &#2547; {total_amount}
                    </Typography>
                    <Typography variant="h6" color="secondary" component="div">
                        On {date}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default Balance;