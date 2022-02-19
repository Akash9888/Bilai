import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Button, Typography } from "@mui/material";
const HeroSection = () => {
    return (
        <Box
        // sx={{ backgroundColor: "#f5f5f7" }}
        >
            <div>
                <Grid
                    container
                    spacing={0}
                    sx={{
                        p: 5,
                        // textAlign: "center",
                    }}>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={5}
                        sx={
                            {
                                // backgroundColor: "#DE4839"
                            }
                        }>
                        <Typography variant="h4">
                            WELCOME THE WORLD OF PET CARE.
                        </Typography>
                        <Typography variant="h6">
                            A complete solution for pet life
                        </Typography>
                        <Button variant="outlined">Shop Now</Button>
                        <Button variant="outlined">Shop Now</Button>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={7}
                        // sx={{ backgroundColor: "#12B0E8" }}
                    >
                        <img
                            style={{
                                // objectFit: "cover",
                                width: "100%",
                                height: "80vh",
                            }}
                            src="https://img.freepik.com/free-vector/cute-different-dogs-group_1308-45985.jpg?w=1380"
                            // src="hero2.jpg"
                            alt=""
                        />
                    </Grid>
                </Grid>
            </div>
        </Box>
    );
};

export default HeroSection;
