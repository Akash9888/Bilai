
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
// import LockOpenIcon from '@mui/icons-material/LockOpen';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import './Login.css';
// import useAuth from '../../hooks/useAuth';
import { Alert, Paper } from '@mui/material';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();
    const theme = createTheme();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleSubmitForm = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setEmail('');
                    setSuccess(true);
                }
            })
        e.preventDefault();
        // console.log(email);
    }
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <Grid container justifyContent="center">
                    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <SupervisorAccountIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Make A Admin
                            </Typography>

                            <Box component="form" onSubmit={handleSubmitForm} noValidate sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            onBlur={handleOnBlur}
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
                                    Make Admin
                                </Button>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                {
                    success && <Alert security='success'>Made Admin Successfully</Alert>
                }
            </Container>
        </ThemeProvider>
    );
};

export default MakeAdmin;