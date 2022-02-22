import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { CardMedia, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import PetsIcon from "@mui/icons-material/Pets";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
function Footer() {
    return (
        <Box sx={{ backgroundColor: "#4c5885", color: "white", mt: 4, p: 5 }}>
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={0}>
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={4}
                            lg={3}
                            // style={{ backgroundColor: "#4a4444" }}
                        >
                            <Typography
                                variant="h6"
                                style={{
                                    marginTop: "10px",
                                    marginBottom: "5px",
                                }}>
                                CONTACT US
                            </Typography>
                            <Grid container spacing={0}>
                                <Grid item xs={2}>
                                    <PetsIcon
                                        color="primary"
                                        style={{
                                            width: "50px",
                                            height: "50px",
                                            marginLeft: "-10px",
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={10}>
                                    <Typography variant="h3">BILAI.</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    {/* <img
                                        src="https://i.ibb.co/HF9wvH3/placeholder.png"
                                        width="20px"
                                        height="20px"
                                        alt="placeholder"
                                        border="0"
                                    /> */}
                                    <MyLocationIcon />
                                </Grid>
                                <Grid item xs={10}>
                                    4321 Your Address, Country
                                </Grid>
                                <Grid item xs={2}>
                                    <EmailIcon />
                                </Grid>
                                <Grid item xs={10}>
                                    bilai2022@info.com
                                </Grid>
                                <Grid item xs={2}>
                                    <PhoneIcon />
                                </Grid>

                                <Grid item xs={10}>
                                    8 800 2336 7811
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            item
                            xs={12}
                            sm={12}
                            md={4}
                            lg={2}
                            // style={{ backgroundColor: "#e68c8c" }}
                        >
                            <Typography
                                variant="h6"
                                style={{
                                    marginTop: "10px",
                                    marginBottom: "5px",
                                }}>
                                COMPANY
                            </Typography>
                            <ul
                                style={{
                                    listStyle: "none",
                                    paddingInlineStart: "5px",
                                    marginBlockStart: "5px",
                                }}>
                                <li>
                                    <Link
                                        href="#"
                                        style={{
                                            textDecoration: "none",
                                            color: "#ffffff",
                                        }}>
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        style={{
                                            textDecoration: "none",
                                            color: "#ffffff",
                                        }}>
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        style={{
                                            textDecoration: "none",
                                            color: "#ffffff",
                                        }}>
                                        Terms and Conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        style={{
                                            textDecoration: "none",
                                            color: "#ffffff",
                                        }}>
                                        Billing and Payment
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        style={{
                                            textDecoration: "none",
                                            color: "#ffffff",
                                        }}>
                                        Shipping and Delivery
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        style={{
                                            textDecoration: "none",
                                            color: "#ffffff",
                                        }}>
                                        Return and Exchange
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        style={{
                                            textDecoration: "none",
                                            color: "#ffffff",
                                        }}>
                                        FAQs
                                    </Link>
                                </li>
                            </ul>
                        </Grid>

                        <Grid
                            item
                            item
                            xs={12}
                            sm={12}
                            md={4}
                            lg={2}
                            // style={{ backgroundColor: "#34e1eb" }}
                        >
                            <Typography
                                variant="h6"
                                style={{
                                    marginTop: "10px",
                                    marginBottom: "5px",
                                }}>
                                QUICK LINK
                            </Typography>
                            <ul
                                style={{
                                    listStyle: "none",
                                    paddingInlineStart: "5px",
                                    marginBlockStart: "5px",
                                }}>
                                <li>
                                    <Link
                                        href="#"
                                        style={{
                                            textDecoration: "none",
                                            color: "#ffffff",
                                        }}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        style={{
                                            textDecoration: "none",
                                            color: "#ffffff",
                                        }}>
                                        Shop
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        style={{
                                            textDecoration: "none",
                                            color: "#ffffff",
                                        }}>
                                        Doctors
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        style={{
                                            textDecoration: "none",
                                            color: "#ffffff",
                                        }}>
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        style={{
                                            textDecoration: "none",
                                            color: "#ffffff",
                                        }}>
                                        Day Care
                                    </Link>
                                </li>
                            </ul>
                        </Grid>
                        <Grid
                            item
                            item
                            xs={12}
                            sm={12}
                            md={4}
                            lg={2}
                            // style={{ backgroundColor: "#e68c8c" }}
                        >
                            <Typography
                                variant="h6"
                                style={{
                                    marginTop: "10px",
                                    marginBottom: "5px",
                                }}>
                                FOLLOW US
                            </Typography>

                            <Box>
                                <img
                                    src="https://i.ibb.co/2hMD1Qz/facebook.png"
                                    width="30px"
                                    height="30px"
                                    style={{ margin: "3px" }}
                                    alt="facebook"
                                    border="0"
                                />
                                <img
                                    src="https://i.ibb.co/FzYLk1F/instagram.png"
                                    width="30px"
                                    height="30px"
                                    style={{ margin: "3px" }}
                                    alt="instagram"
                                    border="0"></img>
                                <img
                                    src="https://i.ibb.co/vDVLG2t/youtube.png"
                                    alt="youtube"
                                    width="30px"
                                    height="30px"
                                    style={{ margin: "3px" }}
                                    border="0"></img>
                            </Box>
                        </Grid>
                        <Grid
                            item
                            item
                            xs={12}
                            sm={12}
                            md={4}
                            lg={3}
                            // style={{ backgroundColor: "#360516" }}
                        >
                            <Typography
                                variant="h6"
                                style={{
                                    marginTop: "10px",
                                    marginBottom: "5px",
                                }}>
                                WE ACCEPT
                            </Typography>
                            <Box
                                sx={{
                                    boxShadow: 3,
                                    borderRadius: "5px",
                                    backgroundColor: "#faf0f0",
                                    pt: 1,
                                }}>
                                <Grid container spacing={0}>
                                    <Grid item xs={4}>
                                        <Box
                                            sx={{
                                                boxShadow: 2,
                                                borderRadius: "5px",
                                                m: 1,
                                                backgroundColor: "#faf5f5",
                                            }}>
                                            {" "}
                                            <CardMedia
                                                component="img"
                                                height="100"
                                                image="https://i.ibb.co/x5N1fF2/BKash-b-Kash-Logo-wine.png"
                                                sx={{ objectFit: "contain" }}
                                                alt="BKash-b-Kash-Logo-wine"
                                                border="0"
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box
                                            sx={{
                                                boxShadow: 2,
                                                borderRadius: "5px",
                                                m: 1,
                                                backgroundColor: "#faf5f5",
                                            }}>
                                            {" "}
                                            <CardMedia
                                                component="img"
                                                height="100"
                                                image="https://i.ibb.co/JH58vqD/Nagad-Logo-wine.png"
                                                sx={{ objectFit: "contain" }}
                                                alt="Nagad-Logo-wine"
                                                border="0"
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box
                                            sx={{
                                                boxShadow: 2,
                                                borderRadius: "5px",
                                                m: 1,
                                                backgroundColor: "#faf5f5",
                                            }}>
                                            {" "}
                                            <CardMedia
                                                component="img"
                                                height="100"
                                                image="https://i.ibb.co/dbjFc0n/dutch-bangla-rocket-1.png"
                                                sx={{ objectFit: "contain" }}
                                                alt="dutch-bangla-rocket-1"
                                                border="0"
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box
                                            sx={{
                                                boxShadow: 2,
                                                borderRadius: "5px",
                                                m: 1,
                                                backgroundColor: "#faf5f5",
                                            }}>
                                            {" "}
                                            <CardMedia
                                                component="img"
                                                height="100"
                                                image="https://i.ibb.co/WGjsJCj/visa-logo-png-2017.png"
                                                sx={{ objectFit: "contain" }}
                                                alt="visa-logo-png-2017"
                                                border="0"
                                            />
                                        </Box>
                                    </Grid>

                                    <Grid item xs={4}>
                                        <Box
                                            sx={{
                                                boxShadow: 2,
                                                borderRadius: "5px",
                                                m: 1,
                                                backgroundColor: "#faf5f5",
                                            }}>
                                            {" "}
                                            <CardMedia
                                                component="img"
                                                height="100"
                                                image="https://i.ibb.co/LNw33Tm/mastercard-PNG25.png"
                                                sx={{ objectFit: "contain" }}
                                                alt="mastercard-PNG25"
                                                border="0"
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box
                                            sx={{
                                                boxShadow: 2,
                                                borderRadius: "5px",
                                                m: 1,
                                                backgroundColor: "#faf5f5",
                                            }}>
                                            {" "}
                                            <CardMedia
                                                component="img"
                                                height="100"
                                                image="https://i.ibb.co/1RnbcpH/American-Express-Logo-wine.png"
                                                sx={{ objectFit: "contain" }}
                                                alt="American-Express-Logo-wine"
                                                border="0"
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Typography
                variant="subtitle2"
                align="center"
                style={{ marginTop: "20px" }}>
                2022 © Bilai All rights reserved.
            </Typography>
        </Box>
    );
}

export default Footer;
