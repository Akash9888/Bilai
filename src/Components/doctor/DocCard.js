import * as React from "react";
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

const DocCard = () => {
    return (
        <Container sx={{ mt: 5 }}>
            <Card sx={{ maxWidth: 348, padding: 4 }}>
                <Box sx={{ textAlign: "center" }}>
                    <img
                        component="img"
                        width="50%"
                        height="150"
                        style={{ borderRadius: "50%" }}
                        src="https://images.pexels.com/photos/8942261/pexels-photo-8942261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt=""
                    />
                </Box>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />

                <Box textAlign="center">
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Dr. Sophie
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Gynecologist
                        </Typography>
                    </CardContent>
                    <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span">
                        <FacebookIcon />
                    </IconButton>
                    <Button variant="contained">Profile</Button>
                    <Button sx={{ marginLeft: 2 }} variant="contained">
                        Appointment
                    </Button>
                </Box>
            </Card>
        </Container>
    );
};

export default DocCard;
