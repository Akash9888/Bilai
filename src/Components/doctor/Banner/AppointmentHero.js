import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bg from '../../../images/pethospital.jpeg';
import catHospital from '../../../photos/2433.jpg';
import { Link } from 'react-router-dom';

const backgroundBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,54,.8)',
    backgroundBlendMode: 'darken, luminosity',

}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}
const AppointmentHero = () => {
    return (
        <Container style={{ backgroundBg }} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box >
                        <Typography variant="h3">
                            Your New Smile <br />
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 15, fontWeight: 300, color: 'gray' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, optio voluptatibus dolore esse modi blanditiis. Modi at deserunt ipsa illo
                        </Typography>
                        <Link to="/appointment" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" style={{ backgroundColor: '#64b5f6' }}>GET APPOINTMENT</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img src={catHospital} style={{
                        maxWidth: '100%',
                        // height: 'auto'
                    }} alt="" />
                </Grid>
            </Grid>

        </Container>
    );
};

export default AppointmentHero;