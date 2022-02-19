import React from "react";
import ReactPlayer from "react-player";
<<<<<<< HEAD
import { Container } from "@mui/material";

import DayCareService from "./DayCareService";
import DayCarePackage from "./DayCarePackage";
import FourZeroFour from "../ErorPage/FourZeroFour";
=======
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import { experimentalStyled as styled } from '@mui/material/styles';
>>>>>>> ab578e10c1bbed51548ed0ec9fa1977015e28c1a

import VideocamIcon from '@mui/icons-material/Videocam';
import PetsIcon from '@mui/icons-material/Pets';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VaccinesIcon from '@mui/icons-material/Vaccines';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const dayCare = () => {
    return (
        <>
<<<<<<< HEAD
            <Container sx={{ mt: 1 }}>
=======
            <Container sx={{ mt: 2 }}>
>>>>>>> ab578e10c1bbed51548ed0ec9fa1977015e28c1a
                <ReactPlayer
                    loop="true"
                    playing
                    width="100%"
                    height="auto"
<<<<<<< HEAD
                    //url="https://youtu.be/Tn3lZE0rRBs"
                    url="daycare.mp4"
                />

                <DayCareService />

                <DayCarePackage />

                <FourZeroFour />
=======
                    url="daycare.mp4"
                />

            </Container>
            <Container>
                <Typography variant="h6" gutterBottom component="div" sx={{ color: '#df681a', mt: 3 }} align="center">
                    COMPREHENSIVE CORE CARE
                </Typography>
                <Typography variant="h4" sx={{ fontSize: 'calc(4.45vw - 0.5rem).2rem' }} color="initial" align="center">
                    Quality, Integrity, Compassion & Service
                </Typography>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                        <Grid item xs={4} sm={4} md={4} >
                            <Typography variant="h5" gutterBottom component="div" align="center">
                                Vaccinations & Prevention
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom component="div" align="center">
                                Prevent a wide range of common conditions and diseases using vaccinations and parasite prevention.
                            </Typography>
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} >
                            <Typography variant="h5" gutterBottom component="div" align="center">
                                Vaccinations & Prevention
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom component="div" align="center">
                                Prevent a wide range of common conditions and diseases using vaccinations and parasite prevention.
                            </Typography>
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} >
                            <Typography variant="h5" gutterBottom component="div" align="center">
                                Vaccinations & Prevention
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom component="div" align="center">
                                Prevent a wide range of common conditions and diseases using vaccinations and parasite prevention.
                            </Typography>
                        </Grid>

                    </Grid>
                </Box>
>>>>>>> ab578e10c1bbed51548ed0ec9fa1977015e28c1a
            </Container>
        </>
    );
};

export default dayCare;
