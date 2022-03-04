
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
import { Paper } from '@mui/material';
import AddReactionIcon from '@mui/icons-material/AddReaction';

import Swal from 'sweetalert2/dist/sweetalert2.js';
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';
const SweetAlert = withSwalInstance(swal);


const Adaptions = () => {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [petName, setPetName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [ownPet, setOwnPet] = React.useState('');
    const [error, setError] = React.useState('');

    const theme = createTheme();

    const handlePhone = e => {
        const value = e.target.value;
        setError({ phone: '' });
        setPhone(value);
        let reg = new RegExp(/^(?:\+88|88)?(01[3-9]\d{8})$/).test(value);
        if (!reg) {
            setError({ phone: "Input a valid Phone Number" })
        }
    }
    const reset = () => {
        setFirstName('');
        setLastName('');
        setPetName('')
        setPhone('');
        setAddress('');
        setOwnPet('');
        setOwnPet('');
    }
    const handleSubmit = e => {
        e.preventDefault();
        const adoptationInfo = { firstName, lastName, petName, phone, address, ownPet };
        // console.log(adoptationInfo);
        fetch('http://localhost:5000/adoptations', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adoptationInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire(
                        'Thank You!',
                        "Submitted Your Adoption Request Successfully!We'll Be in Touch Shortly!",
                        'success'
                    );
                    reset();
                }

            })
    }
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <Paper variant="outlined" sx={{ my: { xs: 12, md: 8 }, p: { xs: 2, md: 3 } }}>
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
                            <AddReactionIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
                            Looking For Adaptions
                        </Typography>
                        <form onSubmit={handleSubmit} >
                            <Grid container spacing={2}>
                                <Grid item xs={6} >
                                    <TextField
                                        name="name"
                                        required
                                        fullWidth
                                        value={firstName}
                                        id="firstName"
                                        label="First Name"
                                        onChange={e => setFirstName(e.target.value)}
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={6} >
                                    <TextField
                                        name="lastName"
                                        required
                                        fullWidth
                                        id="lastName"
                                        value={lastName}
                                        label="Last Name"
                                        onChange={e => setLastName(e.target.value)}
                                        autoFocus
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="typeOfpet"
                                        value={petName}
                                        label="Type Of Pet You Wish To Adopt"
                                        onChange={e => setPetName(e.target.value)}
                                        name="petName"

                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="phone"
                                        value={phone}
                                        label="Phone"
                                        name="phone"
                                        onChange={handlePhone}
                                        error={Boolean(error?.phone)}
                                        helperText={(error?.phone)}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="address"
                                        label="Address"
                                        value={address}
                                        id="address"
                                        onChange={e => setAddress(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="ownPet"
                                        value={ownPet}
                                        label="Do You Own a Pet?"
                                        id="ownPet"
                                        onChange={e => setOwnPet(e.target.value)}
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
                        </form>
                    </Box>
                </Paper>
            </Container>
        </ThemeProvider>
    );
};

export default Adaptions;