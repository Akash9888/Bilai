import {
    Container,
    Grid,
    TextField,
    Typography,
    CardMedia,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const UserProfile = () => {
    const { user } = useAuth();
    const [singleUserData, setSingleUserData] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/singleuser/${user.email}`)
            .then((res) => res.json())
            .then((data) => setSingleUserData(data));
    }, [user?.email]);

    return (
        <Container sx={{ mt: 2 }}>
            <Typography variant="h4" sx={{ m: 2, textAlign: "center" }}>
                My Profile
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={0} md={5}></Grid>
                        <Grid item xs={0} md={2}>
                            <CardMedia
                                component="img"
                                height="200px"
                                sx={{ borderRadius: 5 }}
                                image={singleUserData?.photoUrl}
                                alt={singleUserData?.email}
                            />
                        </Grid>
                        <Grid item xs={0} md={5}></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="First Name"
                                color="secondary"
                                fullWidth
                                value={singleUserData?.firsName}
                                focused
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Last Name"
                                color="secondary"
                                fullWidth
                                value={singleUserData?.lastName}
                                focused
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Email"
                                color="secondary"
                                fullWidth
                                value={singleUserData?.email}
                                focused
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Mobile"
                                color="secondary"
                                fullWidth
                                value="01776774988"
                                focused
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
