import React, { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import DocCard from "./DocCard";
<<<<<<< HEAD
import DocProfile from "./DocProfile";

const DocFeeds = () => {
    const [docList, setDocList] = useState([]);
    useEffect(() => {
        fetch("sample.json")
            .then((res) => res.json())
            .then((data) => {
                setDocList(data);
            });
    }, []);
=======
import AppointmentHeader from "../Appointment/Appointment/AppointmentHeader/AppointmentHeader";
import DoctorServices from "./DoctorServices/DoctorServices/DoctorServices";
import AppointmentHero from "./Banner/AppointmentHero";


const DocFeeds = () => {

>>>>>>> ab578e10c1bbed51548ed0ec9fa1977015e28c1a
    return (
        <>
<<<<<<< HEAD
            <Container sx={{ mt: 3 }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={1}>
                        {docList.map((doc) => (
                            <DocCard key={doc.id} doc={doc}></DocCard>
                        ))}
                    </Grid>
                </Box>
            </Container>
            <DocProfile />
=======
            <AppointmentHero />
            <DoctorServices />
            <AppointmentHeader />

>>>>>>> ab578e10c1bbed51548ed0ec9fa1977015e28c1a
        </>
    );
};

export default DocFeeds;
