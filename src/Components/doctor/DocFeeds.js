import React, { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import DocCard from "./DocCard";
import AppointmentHeader from "../Appointment/Appointment/AppointmentHeader/AppointmentHeader";
import DoctorServices from "./DoctorServices/DoctorServices/DoctorServices";
import AppointmentHero from "./Banner/AppointmentHero";


const DocFeeds = () => {

    return (

        <>
            <AppointmentHero />
            <DoctorServices />
            <AppointmentHeader />

        </>

    );
};

export default DocFeeds;
