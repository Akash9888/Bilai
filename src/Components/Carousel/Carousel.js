import React, { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
// import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { createTheme, Typography, ThemeProvider } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const theme = createTheme();

theme.typography.h3 = {
    fontSize: "16px",
    "@media (min-width:600px)": {
        fontSize: "5px",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "10px",
    },
};

const images = [
    {
        label: "San Francisco – Oakland Bay Bridge, United States",
        imgPath: "https://i.ibb.co/yBShXg7/pexels-photo-1378849.jpg",
    },
    {
        label: "Bird",
        imgPath: "https://i.ibb.co/T4GX9Z2/pexels-photo-6816858.jpg",
    },
    {
        label: "Bali, Indonesia",
        imgPath: "https://i.ibb.co/0FFrYbL/Adorable-furry-spitz-with-juice.jpg",
    },
];

const Carousel = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
    // React.useEffect(() => {
    //     AOS.init();
    // }, []);
    useEffect(() => {
        AOS.init();
    }, []);
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    return (
        <Box sx={{ maxWidth: "100%", flexGrow: 1, mt: 0 }}>
            <AutoPlaySwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents>
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box sx={{ position: "relative" }}>
                                <Box
                                    component="img"
                                    sx={{
                                        height: "100vh",
                                        display: "block",
                                        maxWidth: "100%",
                                        overflow: "hidden",
                                        width: "100%",
                                        objectFit: "cover",
                                    }}
                                    src={step.imgPath}
                                    alt={step.label}
                                />

                                <Typography
                                    data-aos="fade-left"
                                    data-aos-easing="ease-in-sine"
                                    data-aos-duration="1500"
                                    sx={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "10%",
                                        right: "10%",
                                        transform: "translate(-50%,-50%)",
                                        textAlign: "center",
                                        color: "white",
                                        // display: {
                                        //     md: {
                                        //         fontSize: "16px",
                                        //     },
                                        // },
                                    }}
                                    variant="h3"
                                    gutterBottom
                                    component="div">
                                    Lorem ipsum dolor sit amet
                                </Typography>

                                <ThemeProvider theme={theme}>
                                    <Box
                                        sx={{
                                            display: {
                                                xs: "none",
                                                sm: "none",
                                                md: "block",
                                            },
                                            color: "white",
                                        }}>
                                        <Typography
                                            data-aos="fade-left"
                                            data-aos-easing="ease-in-sine"
                                            data-aos-duration="1500"
                                            sx={{
                                                position: "absolute",
                                                top: "60%",
                                                left: "10%",
                                                right: "10%",
                                                // width: "75%",
                                                fontSize: "20px",
                                                textAlign: "center",
                                            }}
                                            variant="subtitle2"
                                            component="div"
                                            gutterBottom>
                                            body1. Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit. Quos
                                            blanditiis tenetur unde suscipit,
                                            quam beatae rerum inventore
                                            consectetur, neque doloribus,
                                            cupiditate numquam dignissimos
                                            laborum fugiat deleniti
                                        </Typography>
                                    </Box>
                                </ThemeProvider>

                                <Button
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom"
                                    sx={{
                                        position: "absolute",
                                        top: "70%",
                                        left: "42%",
                                        right: "42%",
                                        textAlign: "center",
                                        transform: "translate(-50%,-50%)",
                                        fontSize: "16px",
                                        padding: "12px 24px",
                                        cursor: "pointer",
                                        borderRadius: "10px",
                                        textAlign: "center",
                                        mt: 4,
                                    }}
                                    variant="contained">
                                    Shop Now
                                </Button>
                            </Box>
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}>
                        Next
                        {theme.direction === "rtl" ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}>
                        {theme.direction === "rtl" ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </Box>
    );
};

export default Carousel;
