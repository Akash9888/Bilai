
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import { Alert, Paper } from '@mui/material';

const Register = () => {
    const [loginData, setLoginData] = React.useState({});
    const { registerUser, message } = useAuth();
    const [error, setError] = useState('');

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        // console.log(newLoginData);
        setLoginData(newLoginData);
    }
    console.log(message);
    const handleSignUp = e => {
        e.preventDefault();
        if (!loginData.email && !loginData.password) {
            setError('Please Input an Email and a Password');
            return;
        }
        if (loginData.password < 8) {
            setError('Password Should be At least length of 8');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name);
        setError('');
    }
    const theme = createTheme();

    return (

        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="form" noValidate onClick={handleSignUp} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} >
                                    <TextField

                                        name="name"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="Name"
                                        onBlur={handleOnChange}
                                        autoFocus
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        type="email"
                                        label="Email Address"
                                        name="email"
                                        onBlur={handleOnChange}

                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        onBlur={handleOnChange}
                                        id="password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password2"
                                        label="Retype Password"
                                        type="password"
                                        onBlur={handleOnChange}
                                    />
                                </Grid>

                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                        </Box>
                        {
                            error && <Alert severity='success'>{error}</Alert>
                        }
                        {
                            message && <Alert severity="success">{message}</Alert>
                        }
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to='/login' style={{ textDecoration: 'none' }}>
                                    <Button> Already have an account? Sign in</Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                    {/* {
                    isLoading && <CircularProgress />
                } */}


                    {/* 
                <Alert severity="error">{error}</Alert> */}

                </Paper>
            </Container>
        </ThemeProvider>
    );
};

export default Register;