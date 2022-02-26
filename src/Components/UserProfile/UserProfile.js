import { Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const UserProfile = () => {
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/singleuser/${user.email}`)
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, []);
    return (
        <Container sx={{ mt: 2 }}>
            <Typography variant="h4" sx={{ m: 2, textAlign: "center" }}>
                My Profile
                {user.email}
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={0} md={2}></Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                id="fname"
                                fullWidth
                                label="First Name"
                                value={user?.displayName}
                                //defaultValue={user?.displayName} // onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                id="lname"
                                fullWidth
                                label="Last Name"
                                value="Tushar"
                                // onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                id="email"
                                fullWidth
                                label="Email"
                                value="akash.tushar98@gmail.com"
                                // onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                id="mobile"
                                fullWidth
                                label="Mobile"
                                value="01776774988"
                                // onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                id="address"
                                fullWidth
                                label="Address"
                                value="Ananda 20/1, khoradipara"
                                // onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                id="city"
                                fullWidth
                                label="City"
                                value="Sylhet"
                                // onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                id="state"
                                fullWidth
                                label="State"
                                value="Sylhet"
                                // onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                id="zip"
                                fullWidth
                                label="Zip Code"
                                value="3100"
                                // onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                id="country"
                                fullWidth
                                label="Country"
                                value="Bangladesh"
                                // onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={0} sm={0} md={2}></Grid>
            </Grid>
        </Container>
    );
};

export default UserProfile;
