import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const DocCard = (props) => {
    const { title, firstName, profileURL, specialisation } = props.doc;

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 355 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    sx={{}}
                    image={profileURL}
                />

                <Box textAlign="center">
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {firstName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {specialisation}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <IconButton>
                                <LocationOnIcon />
                            </IconButton>
                            Shibgong, Sylhet
                        </Typography>
                    </CardContent>

                    <Box sx={{ mb: 2 }}>
                        <Button variant="contained">View Profile</Button>
                        <Button sx={{ marginLeft: 2 }} variant="contained">
                            Appointment
                        </Button>
                    </Box>
                </Box>
            </Card>
        </Grid>
    );
};

export default DocCard;
