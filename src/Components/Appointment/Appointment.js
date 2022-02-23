import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import DocCard from "../doctor/DocCard";
import AppointmentBanner from "./Appointment/AppointmentBanner/AppointmentBanner";
import AvailableAppointment from "./AvailableAppointment/AvailableAppointment";

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    const [docList, setDocList] = useState([]);
    const [bookingSuccess, setBookingSuccess] = useState(false);
    useEffect(() => {
        fetch("sample.json")
            .then((res) => res.json())
            .then((data) => {
                setDocList(data);
            });
    }, []);
    return (
        <div>
            <AppointmentBanner
                data={date}
                setDate={setDate}></AppointmentBanner>
            <AvailableAppointment
                date={date}
                bookingSuccess={bookingSuccess}></AvailableAppointment>
            <Container sx={{ mt: 3 }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={1}>
                        {docList.map((doc, index) => (
                            <DocCard
                                setBookingSuccess={setBookingSuccess}
                                key={doc.id}
                                doc={doc}
                                index={index}
                                date={date}></DocCard>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Appointment;
