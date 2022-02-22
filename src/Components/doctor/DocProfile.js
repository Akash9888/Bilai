import { Button, Chip, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const DocProfile = () => {
    return (
        <Container sx={{ p: 3 }}>
            <Grid container spacing={5}>
                <Grid item xs={12} md={5}>
                    <img
                        src="https://i.ibb.co/ZJjMcpx/PXL-20211201-122745748-PORTRAIT-2.jpg"
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
                            Dr. Arifur Rabbi
                        </Typography>

                        <Typography variant="h6" sx={{ color: "#7d7d80" }}>
                            DVM, MS (Bangladesh Agricultural University,
                            Mymensingh)
                        </Typography>
                        <Typography variant="h6" sx={{ color: "#7d7d80" }}>
                            Pet Animal Practitioner
                        </Typography>
                        <Typography variant="h6" sx={{ color: "#7d7d80" }}>
                            The Pet Vet BD
                        </Typography>
                        <Typography variant="h6" sx={{ color: "#7d7d80" }}>
                            BVA Reg. 2107
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
                            12 years
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
                                Ta 173/2 Lake view road, Godara ghat to
                                Hatirjheel Road, Dhaka 1212
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
                                7.30PM to 10.00PM
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
                                akash@gmail.com
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ textAlign: "center" }}>
                        <Button variant="outlined">get appointment</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DocProfile;
