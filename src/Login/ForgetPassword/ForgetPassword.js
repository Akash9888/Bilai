import { ThemeProvider } from '@emotion/react';
import { Box, Button, Container, createTheme, CssBaseline, Grid, TextField, Typography, Paper } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ForgetPassword = () => {
    const [forgotPassword, setForgotPassword] = React.useState({});
    const { forgetPassword } = useAuth();
    // let location = useLocation();
    // let navigate = useNavigate();
    const theme = createTheme();
    // const destination = location.state.from;
    // console.log(location.state.from);
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...forgotPassword };
        newLoginData[field] = value;
        console.log(newLoginData);
        setForgotPassword(newLoginData);
    }
    const handleForgetPassword = (e) => {
        e.preventDefault();
        forgetPassword(forgotPassword.email);
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

                        <Box component="form" noValidate onClick={handleForgetPassword} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        sx={{ width: '90%' }}
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        onBlur={handleOnChange}
                                        autoComplete="email"
                                    />
                                </Grid>

                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Submit
                            </Button>
                        </Box>

                    </Box>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <Typography sx={{ color: '#bdbdbd' }}>-------------------------------------         OR---------------------------------</Typography>
                        </Grid>
                    </Grid>

                    <Grid container justifyContent="center">
                        <Grid item>
                            <Link to='/login' style={{ textDecoration: 'none' }}>
                                <Button>Login</Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </ThemeProvider>
    );
};

export default ForgetPassword;