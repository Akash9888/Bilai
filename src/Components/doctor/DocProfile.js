import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Loading from "../Loader/Loading";
const DocProfile = () => {
    const [docList, setDocList] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:5000/doctors")
            .then((res) => res.json())
            .then((data) => {
                setDocList(data[id]);
                setLoading(false);
            });
    }, [id]);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <Container sx={{ p: 3 }}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={5}>
                            <img
                                src={`data:image/png;base64,${docList.imgUrl}`}
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
                                <Typography
                                    variant="h4"
                                    sx={{ color: "#6e79f0" }}>
                                    {docList.name}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{ color: "#7d7d80" }}>
                                    {docList.qualification}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{ color: "#7d7d80" }}>
                                    {docList.designation}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{ color: "#7d7d80" }}>
                                    {docList.organization}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{ color: "#7d7d80" }}>
                                    {docList.registrationNumber}
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
                                <Typography variant="h6">
                                    EXPERIENCE:
                                </Typography>

                                <Typography
                                    variant="h6"
                                    sx={{ color: "#7d7d80", ml: 2 }}>
                                    {docList.experience}
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
                                    <Typography variant="h6">
                                        CHAMBER:
                                    </Typography>

                                    <Typography
                                        variant="h6"
                                        sx={{ color: "#7d7d80", ml: 2 }}>
                                        {docList.address}
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
                                        {docList.visitHour}
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
                                        {docList.email}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{ textAlign: "center" }}>
                                <Link
                                    style={{ textDecoration: "none" }}
                                    to={`/appointment`}>
                                    <Button variant="outlined">
                                        get appointment
                                    </Button>
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            )}
        </>
    );
};

export default DocProfile;
