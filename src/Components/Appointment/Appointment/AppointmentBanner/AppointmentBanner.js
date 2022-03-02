import { Container, Grid } from '@mui/material';
import React from 'react';
import Calendar from '../../../../Shared/Calendar/Calendar';


const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div>
            <Container sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Calendar date={date} setDate={setDate}></Calendar>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src="https://images.pexels.com/photos/6816864/pexels-photo-6816864.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default AppointmentBanner;