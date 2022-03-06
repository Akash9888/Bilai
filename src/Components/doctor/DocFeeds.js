import React from "react";

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
