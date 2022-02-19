import React from "react";
import ReactPlayer from "react-player";
import { Container } from "@mui/material";

import DayCareService from "./DayCareService";
import DayCarePackage from "./DayCarePackage";
import FourZeroFour from "../ErorPage/FourZeroFour";

const dayCare = () => {
    return (
        <>
            <Container sx={{ mt: 1 }}>
                <ReactPlayer
                    loop="true"
                    playing
                    width="100%"
                    height="auto"
                    //url="https://youtu.be/Tn3lZE0rRBs"
                    url="daycare.mp4"
                />

                <DayCareService />

                <DayCarePackage />

                <FourZeroFour />
            </Container>
        </>
    );
};

export default dayCare;
