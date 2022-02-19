import {
    Button,
    Card,
    CardContent,
    Container,
    Grid,
    Link,
    Typography,
} from "@mui/material";
import React from "react";

const DayCarePackage = () => {
    return (
        <>
            <Typography
                variant="h3"
                color="initial"
                align="center"
                sx={{ mt: 5 }}>
                Our Packages
            </Typography>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6} md={3}>
                    <Card
                        sx={{
                            maxWidth: 345,
                            height: 500,

                            m: 1,
                            boxShadow: 3,
                            borderRadius: 2,
                            p: 1,
                        }}>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h4"
                                component="div">
                                Daily
                            </Typography>
                            <Typography variant="body2">
                                ৳200/Day for each Dog
                            </Typography>
                            <Typography variant="body2">
                                ৳150/Day for each Cat
                            </Typography>
                            <Typography variant="body2">
                                ৳120/Day for each Rabbit
                            </Typography>
                            <hr></hr>

                            <Grid container spacing={2}>
                                <Grid item xs={2}>
                                    <img
                                        src="https://i.ibb.co/2hXHkzn/accept.png"
                                        width="20px"
                                        height="20px"
                                        alt="accept"
                                        border="0"
                                    />
                                </Grid>
                                <Grid item xs={10}>
                                    Medical Services
                                </Grid>
                                <Grid item xs={2}>
                                    <img
                                        src="https://i.ibb.co/2hXHkzn/accept.png"
                                        width="20px"
                                        height="20px"
                                        alt="accept"
                                        border="0"
                                    />
                                </Grid>

                                <Grid item xs={10}>
                                    3 Times Healthy Meal
                                </Grid>
                                <Grid item xs={2}>
                                    <img
                                        src="https://i.ibb.co/2hXHkzn/accept.png"
                                        width="20px"
                                        height="20px"
                                        alt="accept"
                                        border="0"
                                    />
                                </Grid>
                                <Grid item xs={10}>
                                    Webcame facilities
                                </Grid>
                                <Grid item xs={2}>
                                    <img
                                        src="https://i.ibb.co/2hXHkzn/accept.png"
                                        width="20px"
                                        height="20px"
                                        alt="accept"
                                        border="0"
                                    />
                                </Grid>
                                <Grid item xs={10}>
                                    Playing Zone Access
                                </Grid>
                            </Grid>
                        </CardContent>
                        <div align="center">
                            <Button
                                variant="outlined"
                                sx={{
                                    width: "80%",
                                    borderRadius: "50px",
                                    px: "8px",
                                }}>
                                Pree Book
                            </Button>
                        </div>
                        <div>
                            <Typography variant="caption">
                                *From total bill, 25% must be paid in the time
                                of preebooking
                            </Typography>
                            <Typography
                                variant="caption"
                                sx={{ display: "block" }}>
                                *<Link href="#">Terms and Conditions</Link>
                            </Typography>
                        </div>
                    </Card>{" "}
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card
                        sx={{
                            maxWidth: 345,
                            height: 500,
                            m: 1,
                            boxShadow: 3,
                            borderRadius: 2,
                            p: 1,
                        }}>
                        {/* <Typography
                        sx={{
                            backgroundColor: "#e53935",
                            width: "50%",
                            borderRadius: 2,
                            mt: 2,
                        }}>
                        {" "}
                        Contained
                    </Typography> */}
                        {/* <Button variant="contained" sx={{ cursor: "alias" }}>
                    Contained
                </Button> */}
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h4"
                                component="div">
                                Weekly
                            </Typography>
                            <Typography variant="body2">
                                ৳ 150/Week for each Dog
                            </Typography>
                            <Typography variant="body2">
                                ৳ 120/Week for each Cat
                            </Typography>
                            <Typography variant="body2">
                                ৳ 100/Week for each Rabbit
                            </Typography>
                            <hr></hr>

                            <Grid container spacing={2}>
                                <Grid item xs={2}>
                                    <img
                                        src="https://i.ibb.co/2hXHkzn/accept.png"
                                        width="20px"
                                        height="20px"
                                        alt="accept"
                                        border="0"
                                    />
                                </Grid>
                                <Grid item xs={10}>
                                    Medical Services
                                </Grid>
                                <Grid item xs={2}>
                                    <img
                                        src="https://i.ibb.co/2hXHkzn/accept.png"
                                        width="20px"
                                        height="20px"
                                        alt="accept"
                                        border="0"
                                    />
                                </Grid>

                                <Grid item xs={10}>
                                    3 Times Healthy Meal
                                </Grid>
                                <Grid item xs={2}>
                                    <img
                                        src="https://i.ibb.co/2hXHkzn/accept.png"
                                        width="20px"
                                        height="20px"
                                        alt="accept"
                                        border="0"
                                    />
                                </Grid>
                                <Grid item xs={10}>
                                    Webcame facilities
                                </Grid>
                                <Grid item xs={2}>
                                    <img
                                        src="https://i.ibb.co/2hXHkzn/accept.png"
                                        width="20px"
                                        height="20px"
                                        alt="accept"
                                        border="0"
                                    />
                                </Grid>
                                <Grid item xs={10}>
                                    Playing Zone Access
                                </Grid>
                            </Grid>
                            {/* <Button size="small" variant="outlined">
                            Pree Book
                        </Button> */}
                        </CardContent>
                        <div align="center">
                            <Button
                                variant="outlined"
                                sx={{
                                    width: "80%",
                                    borderRadius: "50px",
                                    px: "8px",
                                }}>
                                Pree Book
                            </Button>
                        </div>
                        <div>
                            <Typography variant="caption">
                                *From total bill, 25% must be paid in the time
                                of preebooking
                            </Typography>
                            <Typography
                                variant="caption"
                                sx={{ display: "block" }}>
                                *<Link href="#">Terms and Conditions</Link>
                            </Typography>
                        </div>
                    </Card>{" "}
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card
                        sx={{
                            maxWidth: 345,
                            height: 500,
                            m: 1,
                            boxShadow: 3,
                            borderRadius: 2,
                            p: 1,
                        }}>
                        {/* <Typography
                        sx={{
                            backgroundColor: "#e53935",
                            width: "50%",
                            borderRadius: 2,
                            mt: 2,
                        }}>
                        {" "}
                        Contained
                    </Typography> */}
                        {/* <Button variant="contained" sx={{ cursor: "alias" }}>
                    Contained
                </Button> */}
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h4"
                                component="div">
                                Monthly
                            </Typography>
                            <Typography variant="body2">
                                ৳ 150/Month for each Dog
                            </Typography>
                            <Typography variant="body2">
                                ৳ 130/Month for each Cat
                            </Typography>
                            <Typography variant="body2">
                                ৳ 120/Month for each Rabbit
                            </Typography>
                            <hr></hr>

                            <Grid container spacing={2}>
                                <Grid item xs={2}>
                                    <img
                                        src="https://i.ibb.co/2hXHkzn/accept.png"
                                        width="20px"
                                        height="20px"
                                        alt="accept"
                                        border="0"
                                    />
                                </Grid>
                                <Grid item xs={10}>
                                    Medical Services
                                </Grid>
                                <Grid item xs={2}>
                                    <img
                                        src="https://i.ibb.co/2hXHkzn/accept.png"
                                        width="20px"
                                        height="20px"
                                        alt="accept"
                                        border="0"
                                    />
                                </Grid>

                                <Grid item xs={10}>
                                    3 Times Healthy Meal
                                </Grid>
                                <Grid item xs={2}>
                                    <img
                                        src="https://i.ibb.co/2hXHkzn/accept.png"
                                        width="20px"
                                        height="20px"
                                        alt="accept"
                                        border="0"
                                    />
                                </Grid>
                                <Grid item xs={10}>
                                    Webcame facilities
                                </Grid>
                                <Grid item xs={2}>
                                    <img
                                        src="https://i.ibb.co/2hXHkzn/accept.png"
                                        width="20px"
                                        height="20px"
                                        alt="accept"
                                        border="0"
                                    />
                                </Grid>
                                <Grid item xs={10}>
                                    Playing Zone Access
                                </Grid>
                                <Grid item xs={2}>
                                    <img
                                        src="https://i.ibb.co/2hXHkzn/accept.png"
                                        width="20px"
                                        height="20px"
                                        alt="accept"
                                        border="0"
                                    />
                                </Grid>
                                <Grid item xs={10}>
                                    Spa Care
                                </Grid>
                                <Grid item xs={2}>
                                    <img
                                        src="https://i.ibb.co/2hXHkzn/accept.png"
                                        width="20px"
                                        height="20px"
                                        alt="accept"
                                        border="0"
                                    />
                                </Grid>
                                <Grid item xs={10}>
                                    Behavior Training
                                </Grid>
                            </Grid>
                            {/* <Button size="small" variant="outlined">
                            Pree Book
                        </Button> */}
                        </CardContent>
                        <div align="center">
                            <Button
                                variant="outlined"
                                sx={{
                                    width: "80%",
                                    borderRadius: "50px",
                                    px: "8px",
                                }}>
                                Pree Book
                            </Button>
                        </div>
                        <div>
                            <Typography variant="caption">
                                *From total bill, 25% must be paid in the time
                                of preebooking
                            </Typography>
                            <Typography
                                variant="caption"
                                sx={{ display: "block" }}>
                                *<Link href="#">Terms and Conditions</Link>
                            </Typography>
                        </div>
                    </Card>{" "}
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card
                        sx={{
                            maxWidth: 345,
                            height: 500,
                            m: 1,
                            boxShadow: 3,
                            borderRadius: 2,
                            p: 1,
                        }}>
                        {/* <Typography
                        sx={{
                            backgroundColor: "#e53935",
                            width: "50%",
                            borderRadius: 2,
                            mt: 2,
                        }}>
                        {" "}
                        Contained
                    </Typography> */}
                        {/* <Button variant="contained" sx={{ cursor: "alias" }}>
                    Contained
                </Button> */}
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h4"
                                component="div">
                                Yearly
                            </Typography>
                            <Typography variant="body2">
                                ৳200/Day for each Dog
                            </Typography>
                            <Typography variant="body2">
                                ৳150/Day for each Cat
                            </Typography>
                            <Typography variant="body2">
                                ৳120/Day for each Rabbit
                            </Typography>
                            <hr></hr>

                            <Grid container spacing={2}>
                                <Grid item xs={2}>
                                    <img
                                        src="https://i.ibb.co/2hXHkzn/accept.png"
                                        width="20px"
                                        height="20px"
                                        alt="accept"
                                        border="0"
                                    />
                                </Grid>
                                <Grid item xs={10}>
                                    Medical Services
                                </Grid>
                                <Grid item xs={2}>
                                    <img
                                        src="https://i.ibb.co/2hXHkzn/accept.png"
                                        width="20px"
                                        height="20px"
                                        alt="accept"
                                        border="0"
                                    />
                                </Grid>

                                <Grid item xs={10}>
                                    3 Times Healthy Meal
                                </Grid>
                                <Grid item xs={2}>
                                    <img
                                        src="https://i.ibb.co/2hXHkzn/accept.png"
                                        width="20px"
                                        height="20px"
                                        alt="accept"
                                        border="0"
                                    />
                                </Grid>
                                <Grid item xs={10}>
                                    Webcame facilities
                                </Grid>
                                <Grid item xs={2}>
                                    <img
                                        src="https://i.ibb.co/2hXHkzn/accept.png"
                                        width="20px"
                                        height="20px"
                                        alt="accept"
                                        border="0"
                                    />
                                </Grid>
                                <Grid item xs={10}>
                                    Playing Zone Access
                                </Grid>
                                <Grid item xs={2}>
                                    <img
                                        src="https://i.ibb.co/2hXHkzn/accept.png"
                                        width="20px"
                                        height="20px"
                                        alt="accept"
                                        border="0"
                                    />
                                </Grid>
                                <Grid item xs={10}>
                                    Spa Care
                                </Grid>
                                <Grid item xs={2}>
                                    <img
                                        src="https://i.ibb.co/2hXHkzn/accept.png"
                                        width="20px"
                                        height="20px"
                                        alt="accept"
                                        border="0"
                                    />
                                </Grid>
                                <Grid item xs={10}>
                                    Behavior Training
                                </Grid>
                            </Grid>
                        </CardContent>
                        <div align="center">
                            <Button
                                variant="outlined"
                                sx={{
                                    width: "80%",
                                    borderRadius: "50px",
                                    px: "8px",
                                }}>
                                Pree Book
                            </Button>
                        </div>
                        <div>
                            <Typography variant="caption">
                                *From total bill, 25% must be paid in the time
                                of preebooking
                            </Typography>
                            <Typography
                                variant="caption"
                                sx={{ display: "block" }}>
                                *<Link href="#">Terms and Conditions</Link>
                            </Typography>
                        </div>
                    </Card>{" "}
                </Grid>
            </Grid>
        </>
    );
};

export default DayCarePackage;
