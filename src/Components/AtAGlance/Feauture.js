import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Feauture = () => {
    return (
        <Box sx={{ p: 3, mt: 5 }}>
            <Grid container spacing={3}>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    // sx={{ backgroundColor: "#32633f" }}
                >
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            // backgroundColor: "#eb4034",
                            borderRadius: 3,
                            boxShadow: 2,
                            p: 1,
                        }}>
                        <Grid item xs={4}>
                            <img
                                src="https://i.ibb.co/MG8h9Vv/pet-toy.png"
                                style={{ width: "100%", color: "red" }}
                                alt="pet-toy"
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <Typography
                                variant="h4"
                                sx={{
                                    color: "#4c5885",
                                    fontWeight: "bold",
                                }}>
                                Pet Toys
                            </Typography>
                            <Typography variant="body2" sx={{ color: "gray" }}>
                                foasjfovnoierjfowiev oirfoiwhvwf
                                iehrijhevihfivhv hh
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    // sx={{ backgroundColor: "#32633f" }}
                >
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            // backgroundColor: "#eb4034",
                            borderRadius: 3,
                            boxShadow: 2,
                            p: 1,
                        }}>
                        <Grid item xs={4}>
                            <img
                                src="https://i.ibb.co/4mNkWPj/pet-bowl.png"
                                style={{ width: "100%" }}
                                alt="pet-toy"
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <Typography
                                variant="h4"
                                sx={{
                                    color: "#4c5885",
                                    fontWeight: "bold",
                                }}>
                                Pet Foods
                            </Typography>
                            <Typography variant="body2" sx={{ color: "gray" }}>
                                foasjfovnoierjfowiev oirfoiwhvwf
                                iehrijhevihfivhv hh
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    // sx={{ backgroundColor: "#32633f" }}
                >
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            // backgroundColor: "#eb4034",
                            borderRadius: 3,
                            boxShadow: 2,
                            p: 1,
                        }}>
                        <Grid item xs={4}>
                            <img
                                src="https://i.ibb.co/YyX7FhW/stethoscope.png"
                                style={{ width: "100%" }}
                                alt="pet-toy"
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <Typography
                                variant="h4"
                                sx={{
                                    color: "#4c5885",
                                    fontWeight: "bold",
                                }}>
                                Health Care
                            </Typography>
                            <Typography variant="body2" sx={{ color: "gray" }}>
                                foasjfovnoierjfowiev oirfoiwhvwf
                                iehrijhevihfivhv hh
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    // sx={{ backgroundColor: "#32633f" }}
                >
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            // backgroundColor: "#eb4034",
                            borderRadius: 3,
                            boxShadow: 2,
                            p: 1,
                        }}>
                        <Grid item xs={4}>
                            <img
                                src="https://i.ibb.co/sWbQr1V/pet-love.png"
                                style={{ width: "100%" }}
                                alt="pet-toy"
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <Typography
                                variant="h4"
                                sx={{
                                    color: "#4c5885",
                                    fontWeight: "bold",
                                }}>
                                Pet Blog
                            </Typography>
                            <Typography variant="body2" sx={{ color: "gray" }}>
                                foasjfovnoierjfowiev oirfoiwhvwf
                                iehrijhevihfivhv hh
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Feauture;
