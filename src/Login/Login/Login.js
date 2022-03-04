
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import useAuth from '../../hooks/useAuth';
import { Alert, Paper } from '@mui/material';

const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { authError, signInWithGoogle, loginUser } = useAuth();
    let location = useLocation();
    let navigate = useNavigate();
    const theme = createTheme();

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate);

    }

    const handleSignIn = e => {

        e.preventDefault();
        loginUser(email, password, location, navigate);
        // reset();
    }
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
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOpenIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>
                        <form onSubmit={handleSignIn} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        onChange={e => setEmail(e.target.value)}
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        onChange={e => setPassword(e.target.value)}
                                        id="password"
                                    />
                                </Grid>

                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Login
                            </Button>
                        </form >
                        {
                            authError && <Alert severity="error">{authError}</Alert>
                        }
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to='/forgetPassword' style={{ color: 'red', textDecoration: 'none' }}>
                                    <Button>Forget Password?</Button>
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to='/register' style={{ textDecoration: 'none' }}>
                                    <Button style={{ textDecoration: 'none' }}>Didn't Have an Account?Sign Up</Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <Typography>-------------------------------------OR---------------------------------</Typography>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <button onClick={handleGoogleSignIn} className="login-with-google-btn mt-3">Sign In Using Google</button>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </ThemeProvider>
    );
};

export default Login;