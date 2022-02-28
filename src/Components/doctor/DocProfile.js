import { Button, Chip, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Doctors from "./DocList";

console.log(Doctors);

const DocProfile = () => {
    const { id } = useParams();
    // console.log(id);
    const {
        name,
        imgUrl,
        experience,
        registrationNumber,
        qualification,
        designation,
        expertise,
        organization,
        address,
        visitHour,
        phone,
        email,
    } = Doctors[id];

    return (
        <Container sx={{ p: 3 }}>
            <Grid container spacing={5}>
                <Grid item xs={12} md={5}>
                    <img
                        src={imgUrl}
                        alt="PXL-20211201-122745748-PORTRAIT-2"
                        style={{
                            padding: "1px",
                            borderRadius: "5%",
                            objectFit: "cover",
                            width: "100%",
                            height: "500px",
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={7}>
                    <Box sx={{ p: 1 }}>
                        <Typography variant="h5">PROFILE</Typography>
                        <Typography variant="h4" sx={{ color: "#6e79f0" }}>
                            {name}
                        </Typography>

                        <Typography variant="h6" sx={{ color: "#7d7d80" }}>
                            {qualification}
                        </Typography>
                        <Typography variant="h6" sx={{ color: "#7d7d80" }}>
                            {designation}
                        </Typography>
                        <Typography variant="h6" sx={{ color: "#7d7d80" }}>
                            {organization}
                        </Typography>
                        <Typography variant="h6" sx={{ color: "#7d7d80" }}>
                            {registrationNumber}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            p: 1,
                            pb: 0,
                        }}>
                        <Typography variant="h6">EXPERIENCE:</Typography>

                        <Typography
                            variant="h6"
                            sx={{ color: "#7d7d80", ml: 2 }}>
                            {experience}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            p: 1,
                            pb: 0,
                        }}>
                        <Typography variant="h6">TYPES OF:</Typography>

                        <Typography
                            variant="h6"
                            sx={{ color: "#7d7d80", ml: 2 }}>
                            Veterinary Doctor
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            p: 1,
                            pb: 0,
                        }}>
                        <Typography variant="h6">LANGUAGE:</Typography>

                        <Typography
                            variant="h6"
                            sx={{ color: "#7d7d80", ml: 2 }}>
                            Bangla, English
                        </Typography>
                    </Box>

                    <Box sx={{ pt: 2 }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",

                                p: 1,
                                pb: 0,
                            }}>
                            <Typography variant="h6">CHAMBER:</Typography>

                            <Typography
                                variant="h6"
                                sx={{ color: "#7d7d80", ml: 2 }}>
                                {address}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",

                                p: 1,
                                pb: 0,
                            }}>
                            <Typography variant="h6">
                                VISITING HOURS:
                            </Typography>

                            <Typography
                                variant="h6"
                                sx={{ color: "#7d7d80", ml: 2 }}>
                                {visitHour}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",

                                p: 1,
                                pb: 0,
                            }}>
                            <Typography variant="h6">EMAIL:</Typography>

                            <Typography
                                variant="h6"
                                sx={{ color: "#7d7d80", ml: 2 }}>
                                {email}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ textAlign: "center" }}>
                        <Link
                            style={{ textDecoration: "none" }}
                            to={`/appointment`}>
                            <Button variant="outlined">get appointment</Button>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DocProfile;
