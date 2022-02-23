import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const DayCareService = () => {
    return (
        <>
            <Typography
                variant="h6"
                gutterBottom
                component="div"
                sx={{ color: "#df681a", mt: 3 }}
                align="center">
                COMPREHENSIVE CORE CARE
            </Typography>
            <Typography
                variant="h4"
                sx={{
                    // fontSize: "calc(4.45vw - 0.5rem).2rem",
                    mb: 3,
                    color: "#757273",
                }}
                color="initial"
                align="center">
                Quality, Integrity, Compassion & Service
            </Typography>
            <Grid container spacing={3} sx={{ textAlign: "justify" }}>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            alignItems: "center",
                            boxShadow: 2,
                            borderRadius: 2,
                            p: 1,
                        }}>
                        <Grid item xs={3}>
                            <img
                                width="100%"
                                height="100px"
                                src="https://i.ibb.co/XF1x7KH/veterinary-1.png"
                                alt="veterinarian"
                                border="0"
                            />
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant="h5" sx={{ color: "#4c5885" }}>
                                Medical Service
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                color="text.secondary">
                                Lizards are a widespread group of squamate
                                reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </Grid>
                    </Grid>{" "}
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            alignItems: "center",
                            boxShadow: 2,
                            borderRadius: 2,
                            p: 1,
                        }}>
                        <Grid item xs={3}>
                            <img
                                width="100%"
                                height="100px"
                                src="https://i.ibb.co/9g2Pb6y/spa.png"
                                alt="veterinarian"
                                border="0"
                            />
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant="h5" sx={{ color: "#4c5885" }}>
                                Spa Center
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                color="text.secondary">
                                Lizards are a widespread group of squamate
                                reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </Grid>
                    </Grid>{" "}
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            alignItems: "center",
                            boxShadow: 2,
                            borderRadius: 2,
                            p: 1,
                        }}>
                        <Grid item xs={3}>
                            <img
                                width="100%"
                                height="100px"
                                src="https://i.ibb.co/LYqrhSh/webcam.png"
                                alt="veterinarian"
                                border="0"
                            />
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant="h5" sx={{ color: "#4c5885" }}>
                                WEBCAMS
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                color="text.secondary">
                                Lizards are a widespread group of squamate
                                reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </Grid>
                    </Grid>{" "}
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            alignItems: "center",
                            boxShadow: 2,
                            borderRadius: 2,
                            p: 1,
                        }}>
                        <Grid item xs={3}>
                            <img
                                width="100%"
                                height="100px"
                                src="https://i.ibb.co/741ZNS1/pet-toy-1.png"
                                alt="veterinarian"
                                border="0"
                            />
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant="h5" sx={{ color: "#4c5885" }}>
                                Playing Zone
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                color="text.secondary">
                                Lizards are a widespread group of squamate
                                reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </Grid>
                    </Grid>{" "}
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            alignItems: "center",
                            boxShadow: 2,
                            borderRadius: 2,
                            p: 1,
                        }}>
                        <Grid item xs={3}>
                            <img
                                width="100%"
                                height="100px"
                                src="https://i.ibb.co/Xpxy4Jh/pet-bowl-1.png"
                                alt="veterinarian"
                                border="0"
                            />
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant="h5" sx={{ color: "#4c5885" }}>
                                Healthy Meal
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                color="text.secondary">
                                Lizards are a widespread group of squamate
                                reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </Grid>
                    </Grid>{" "}
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            alignItems: "center",
                            boxShadow: 2,
                            borderRadius: 2,
                            p: 1,
                        }}>
                        <Grid item xs={3}>
                            <img
                                width="100%"
                                height="100px"
                                src="https://i.ibb.co/CKZq8SD/dog-1.png"
                                alt="veterinarian"
                                border="0"
                            />
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant="h5" sx={{ color: "#4c5885" }}>
                                Behavior Training
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                color="text.secondary">
                                Lizards are a widespread group of squamate
                                reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </Grid>
                    </Grid>{" "}
                </Grid>
            </Grid>
        </>
    );
};

export default DayCareService;
