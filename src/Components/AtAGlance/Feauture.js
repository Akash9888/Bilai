import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Feauture = () => {
    return (
        <Container sx={{ p: 3 }}>
            <Typography
                variant="h4"
                sx={{ textAlign: "center", p: 3, color: "#757273" }}>
                Our products
            </Typography>
            <Grid container spacing={3}>
                <Grid
                    item
                    xs={12}
                    md={3}

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
                        <Grid item xs={3}>
                            <img
                                src="https://i.ibb.co/LSgq2pk/pet-1.png"
                                style={{ width: "100%", color: "red" }}
                                alt="pet-toy"
                            />
                        </Grid>
                        <Grid item xs={9}>
                            <Typography
                                variant="h5"
                                sx={{
                                    color: "#4c5885",
                                    fontWeight: "bold",
                                }}>
                                Pet Toys
                            </Typography>
                            <Typography variant="body2" sx={{ color: "gray" }}>
                                We have a baeautiful collections of cllasy
                                toys.Buy your favorite one.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={3}
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
                        <Grid item xs={3}>
                            <img
                                src="https://i.ibb.co/4mNkWPj/pet-bowl.png"
                                style={{ width: "100%" }}
                                alt="pet-toy"
                            />
                        </Grid>
                        <Grid item xs={9}>
                            <Typography
                                variant="h5"
                                sx={{
                                    color: "#4c5885",
                                    fontWeight: "bold",
                                }}>
                                Pet Foods
                            </Typography>
                            <Typography variant="body2" sx={{ color: "gray" }}>
                                We have blast collections of both local and
                                foreign Vet Food
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={3}
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
                        <Grid item xs={3}>
                            <img
                                src="https://i.ibb.co/s6v9PVK/medicine.png"
                                style={{ width: "100%" }}
                                alt="pet-toy"
                            />
                        </Grid>
                        <Grid item xs={9}>
                            <Typography
                                variant="h5"
                                sx={{
                                    color: "#4c5885",
                                    fontWeight: "bold",
                                }}>
                                Medicine
                            </Typography>
                            <Typography variant="body2" sx={{ color: "gray" }}>
                                We have blast collections of both local and
                                foreign Vet Medicine
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={3}
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
                        <Grid item xs={3}>
                            <img
                                src="https://i.ibb.co/mCksBdP/pet.png"
                                style={{ width: "100%" }}
                                alt="pet-toy"
                            />
                        </Grid>
                        <Grid item xs={9}>
                            <Typography
                                variant="h5"
                                sx={{
                                    color: "#4c5885",
                                    fontWeight: "bold",
                                }}>
                                Pet
                            </Typography>
                            <Typography variant="body2" sx={{ color: "gray" }}>
                                We are selling different types of pets. Pick
                                your favorite one.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Feauture;
