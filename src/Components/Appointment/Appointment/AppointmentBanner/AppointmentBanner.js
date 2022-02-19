import { Container, Grid } from '@mui/material';
import React from 'react';
import Calendar from '../../../../Shared/Calendar/Calendar';
import chair from '../../../../images/chair.png';

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div>
            <Container sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Calendar date={date} setDate={setDate}></Calendar>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={chair} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default AppointmentBanner;