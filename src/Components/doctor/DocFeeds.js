import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

import DocProfile from "./DocProfile";
import AppointmentHeader from "../Appointment/Appointment/AppointmentHeader/AppointmentHeader";
import DoctorServices from "./DoctorServices/DoctorServices/DoctorServices";
import AppointmentHero from "./Banner/AppointmentHero";

const DocFeeds = () => {
    const [docList, setDocList] = useState([]);
    useEffect(() => {
        fetch("sample.json")
            .then((res) => res.json())
            .then((data) => {
                setDocList(data);
            });
    }, []);

    return (
        <>
            <AppointmentHero />
            <DoctorServices />
            <AppointmentHeader />
        </>
    );
};

export default DocFeeds;
