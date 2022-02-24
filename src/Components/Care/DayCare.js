import React from "react";
import ReactPlayer from "react-player";

import DayCareService from "./DayCareService";
import DayCarePackage from "./DayCarePackage";
import { Container } from "@mui/material";

// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
// }));
const dayCare = () => {
    return (
        <>
            <Container sx={{ mt: 2 }}>
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
            </Container>
        </>
    );
};

export default dayCare;
