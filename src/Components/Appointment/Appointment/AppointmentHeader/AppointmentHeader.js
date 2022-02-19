import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bgAppointment from '../../../../images/appointment-bg.png';
import doctor from '../../../../images/doctor.png';
const appointmentBanner = {
    background: `url(${bgAppointment})`,
    backgroundColor: 'rgba(45,58,54,.8)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}
const AppointmentHeader = () => {
    return (
        <Container style={appointmentBanner} sx={{ flexGrow: 1, borderRadius: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: -120 }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left'
                }}>
                    <Box sx={{ p: 2 }}>
                        <Typography variant='h6' sx={{ mb: 3 }} style={{ color: '#5ce7ed' }}>
                            Appointment
                        </Typography>
                        <Typography variant='h4' style={{ color: 'white' }}>
                            Make An Appointment Today
                        </Typography>
                        <Typography variant='h6' sx={{ mb: 3 }} style={{ color: 'white', fontSize: 16, fontWeight: 300 }}>
                            It is a long established fact that a reader will be destractedby the readable content of a page when looking at its.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: 'linear-gradient(to top, #5f2c82, #49a09d)' }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;