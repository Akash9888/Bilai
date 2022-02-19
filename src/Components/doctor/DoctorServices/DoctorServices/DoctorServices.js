import React from 'react';
import { AccessTimeOutlined, LocationOn } from '@mui/icons-material';
import { Container, Grid, Paper, Box } from '@mui/material';
import Typography from '@mui/material/Typography';

const DoctorServices = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={4}>
                    <Paper elevation={0}
                        sx={{
                            width: "90%",
                            height: "90%",
                            backgroundColor: '#76c5be',
                            color: 'White'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                p: 2,
                                m: 2,
                                pt: 5
                            }}
                        >
                            <Box>
                                <AccessTimeOutlined sx={{ fontSize: 70, fontWeight: 300 }}></AccessTimeOutlined>
                            </Box>
                            <Box>
                                <Typography variant="h5" gutterBottom component="div">
                                    Opening Hours
                                </Typography>
                                <Typography variant="caption" sx={{ fontSize: '15px' }} display="block" gutterBottom>
                                    From 8.00 AM - 12.00 PM
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Paper elevation={0}
                        sx={{
                            width: "90%",
                            height: "90%",
                            backgroundColor: '#3a4256',
                            color: 'White'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                p: 2,
                                m: 2,
                                pt: 5
                            }}
                        >
                            <Box>
                                <LocationOn sx={{ fontSize: 70, fontWeight: 300 }}></LocationOn>
                            </Box>
                            <Box>
                                <Typography variant="h5" gutterBottom component="div">
                                    Visit our location
                                </Typography>
                                <Typography variant="caption" sx={{ fontSize: '15px' }} display="block" gutterBottom>
                                    Broklyn,Ny 10036,United States
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Paper elevation={0}
                        sx={{
                            width: "90%",
                            height: "90%",
                            backgroundColor: '#76c5be',
                            color: 'White'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                p: 2,
                                m: 2,
                                pt: 5
                            }}
                        >
                            <Box>
                                <AccessTimeOutlined sx={{ fontSize: 70, fontWeight: 300 }}></AccessTimeOutlined>
                            </Box>
                            <Box>
                                <Typography variant="h5" gutterBottom component="div">
                                    Contact us now
                                </Typography>
                                <Typography variant="caption" sx={{ fontSize: '15px' }} display="block" gutterBottom>
                                    +000 123 456789
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DoctorServices;