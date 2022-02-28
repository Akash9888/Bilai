import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react';

const TotalAppointmentMade = ({ totalAppointment }) => {
    const date = new Date().toDateString();
    return (
        <div>
            <Card sx={{ minWidth: 200, minHeight: 200 }}>
                <CardContent>
                    <Typography component="h4" variant="h6" color="primary" gutterBottom>
                        Total Appointment Made {totalAppointment.length}
                    </Typography>
                    <Typography component="p" color="secondary" variant="h6">
                        Till {date}
                    </Typography>
                    {/* <Typography variant="h6" color="secondary" component="div">
                        {totalAppointment.length}
                    </Typography> */}
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default TotalAppointmentMade;