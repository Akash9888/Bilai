import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

function FourZeroFour(props) {
    return (
        <Container sx={{ textAlign: "center" }}>
            <Typography variant="h1" sx={{ fontWeight: "bold" }}>
                404
            </Typography>
            <Box
                sx={{
                    width: "100%",
                    height: "400px",
                    backgroundImage:
                        "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
                    backgroundPosition: "center",
                }}></Box>
            <Typography variant="h3">Look like you're lost</Typography>
            <Typography variant="subtitle2">
                the page you are looking for not avaible!
            </Typography>
            <Link style={{ textDecoration: "none" }} to={"/"}>
                <Button variant="outlined" sx={{ mt: 2 }}>
                    Go to Home
                </Button>
            </Link>
        </Container>
    );
}

export default FourZeroFour;
