import React from "react";
import ReactPlayer from "react-player";
import { CardMedia, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const dayCare = () => {
    return (
        <Container sx={{ mt: 2 }}>
            <ReactPlayer
                loop="true"
                playing
                width="100%"
                height="auto"
                //url="https://youtu.be/Tn3lZE0rRBs"
                url="daycare.mp4"
            />
            <Typography variant="h3" color="initial" align="center">
                Our Features
            </Typography>

            <Box sx={{ flexGrow: 1, mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sm={12}>
                        <CardMedia
                            component="img"
                            height="auto"
                            image="https://images.pexels.com/photos/1350593/pexels-photo-1350593.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="green iguana"
                        />
                    </Grid>
                    <Grid item xs={12} md={6} sm={12}>
                        <Typography variant="h4" align="center">
                            24/7 Hours of Medical Service
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            color="text.secondary"
                            align="center">
                            Lizards are a widespread group of squamate reptiles,
                            with over 6,000 species, ranging across all
                            continents except Antarctica
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} sm={12}>
                        <Typography variant="h4" align="center">
                            Dedicated Playing Zone
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            color="text.secondary"
                            align="center">
                            Lizards are a widespread group of squamate reptiles,
                            with over 6,000 species, ranging across all
                            continents except Antarctica
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} sm={12}>
                        <CardMedia
                            component="img"
                            height="auto"
                            image="https://images.pexels.com/photos/160755/kittens-cats-foster-playing-160755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="green iguana"
                        />
                    </Grid>
                    <Grid item xs={12} md={6} sm={12}>
                        <CardMedia
                            component="img"
                            height="auto"
                            image="https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="green iguana"
                        />
                    </Grid>
                    <Grid item xs={12} md={6} sm={12}>
                        <Typography variant="h4" align="center">
                            Remote Ovservation
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            color="text.secondary"
                            align="center">
                            Lizards are a widespread group of squamate reptiles,
                            with over 6,000 species, ranging across all
                            continents except Antarctica
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default dayCare;
