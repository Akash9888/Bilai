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
    // console.log("lol " + props.doc);
    console.log(props);
    // const [docList, setDocList] = useState([]);
    // useEffect(() => {
    //     fetch("sample.json")
    //         .then((res) => res.json())
    //         .then((data) => setDocList(data));
    // }, []);

    return (
        <Container sx={{ mt: 3 }}>
            {/* <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 355 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                sx={{}}
                                image="https://images.pexels.com/photos/5194658/pexels-photo-5194658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            />

                            <Box textAlign="center">
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div">
                                        Dr. Sophie
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary">
                                        Gynecologist
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary">
                                        <IconButton>
                                            <LocationOnIcon />
                                        </IconButton>
                                        Shibgong, Sylhet
                                    </Typography>
                                </CardContent>

                                <Box sx={{ mb: 2 }}>
                                    <Button variant="contained">
                                        View Profile
                                    </Button>
                                    <Button
                                        sx={{ marginLeft: 2 }}
                                        variant="contained">
                                        Appointment
                                    </Button>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 355 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                sx={{}}
                                image="https://images.pexels.com/photos/5194658/pexels-photo-5194658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            />

                            <Box textAlign="center">
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div">
                                        Dr. Sophie
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary">
                                        Gynecologist
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary">
                                        <IconButton>
                                            <LocationOnIcon />
                                        </IconButton>
                                        Shibgong, Sylhet
                                    </Typography>
                                </CardContent>

                                <Box sx={{ mb: 2 }}>
                                    <Button variant="contained">
                                        View Profile
                                    </Button>
                                    <Button
                                        sx={{ marginLeft: 2 }}
                                        variant="contained">
                                        Appointment
                                    </Button>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 355 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                sx={{}}
                                image="https://images.pexels.com/photos/5194658/pexels-photo-5194658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            />

                            <Box textAlign="center">
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div">
                                        Dr. Sophie
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary">
                                        Gynecologist
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary">
                                        <IconButton>
                                            <LocationOnIcon />
                                        </IconButton>
                                        Shibgong, Sylhet
                                    </Typography>
                                </CardContent>

                                <Box sx={{ mb: 2 }}>
                                    <Button variant="contained">
                                        View Profile
                                    </Button>
                                    <Button
                                        sx={{ marginLeft: 2 }}
                                        variant="contained">
                                        Appointment
                                    </Button>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Box> */}
        </Container>
        // <Container sx={{ mt: 5 }}>
        //     <Card sx={{ maxWidth: 355 }}>
        //         <CardMedia
        //             component="img"
        //             alt="green iguana"
        //             height="140"
        //             sx={{}}
        //             image="https://images.pexels.com/photos/5194658/pexels-photo-5194658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        //         />

        //         <Box textAlign="center">
        //             <CardContent>
        //                 <Typography gutterBottom variant="h5" component="div">
        //                     Dr. Sophie
        //                 </Typography>
        //                 <Typography variant="body2" color="text.secondary">
        //                     Gynecologist
        //                 </Typography>
        //                 <Typography variant="body2" color="text.secondary">
        //                     <IconButton>
        //                         <LocationOnIcon />
        //                     </IconButton>
        //                     Shibgong, Sylhet
        //                 </Typography>
        //             </CardContent>

        //             <Box sx={{ mb: 2 }}>
        //                 <Button variant="contained">View Profile</Button>
        //                 <Button sx={{ marginLeft: 2 }} variant="contained">
        //                     Appointment
        //                 </Button>
        //             </Box>
        //         </Box>
        //     </Card>
        //     <Card sx={{ maxWidth: 355 }}>
        //         <CardMedia
        //             component="img"
        //             alt="green iguana"
        //             height="140"
        //             sx={{}}
        //             image="https://images.pexels.com/photos/5194658/pexels-photo-5194658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        //         />

        //         <Box textAlign="center">
        //             <CardContent>
        //                 <Typography gutterBottom variant="h5" component="div">
        //                     Dr. Sophie
        //                 </Typography>
        //                 <Typography variant="body2" color="text.secondary">
        //                     Gynecologist
        //                 </Typography>
        //                 <Typography variant="body2" color="text.secondary">
        //                     <IconButton>
        //                         <LocationOnIcon />
        //                     </IconButton>
        //                     Shibgong, Sylhet
        //                 </Typography>
        //             </CardContent>

        //             <Box sx={{ mb: 2 }}>
        //                 <Button variant="contained">View Profile</Button>
        //                 <Button sx={{ marginLeft: 2 }} variant="contained">
        //                     Appointment
        //                 </Button>
        //             </Box>
        //         </Box>
        //     </Card>
        //     <Card sx={{ maxWidth: 355 }}>
        //         <CardMedia
        //             component="img"
        //             alt="green iguana"
        //             height="140"
        //             sx={{}}
        //             image="https://images.pexels.com/photos/5194658/pexels-photo-5194658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        //         />

        //         <Box textAlign="center">
        //             <CardContent>
        //                 <Typography gutterBottom variant="h5" component="div">
        //                     Dr. Sophie
        //                 </Typography>
        //                 <Typography variant="body2" color="text.secondary">
        //                     Gynecologist
        //                 </Typography>
        //                 <Typography variant="body2" color="text.secondary">
        //                     <IconButton>
        //                         <LocationOnIcon />
        //                     </IconButton>
        //                     Shibgong, Sylhet
        //                 </Typography>
        //             </CardContent>

        //             <Box sx={{ mb: 2 }}>
        //                 <Button variant="contained">View Profile</Button>
        //                 <Button sx={{ marginLeft: 2 }} variant="contained">
        //                     Appointment
        //                 </Button>
        //             </Box>
        //         </Box>
        //     </Card>
        // </Container>
    );
};

export default DocCard;
