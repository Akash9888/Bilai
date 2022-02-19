import { Alert, Container, Typography } from '@mui/material';
import React from 'react';

const AvailableAppointment = ({ date, bookingSuccess }) => {

    return (
        <Container>
            <Typography style={{ color: '#64b5f6', marginBottom: '15px' }} variant="h5" gutterBottom component="div" align="center">Available Appointments on {date.toDateString()}</Typography>
            {
                bookingSuccess && <Alert severity="success">Appointment Booked Successfully!</Alert>
            }
        </Container>
    );
};

export default AvailableAppointment;