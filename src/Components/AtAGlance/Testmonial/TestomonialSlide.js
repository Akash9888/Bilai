import React from "react";
// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import TestmonialCard from "./TestomonialCard.css";

function TestomonialSlide(props) {
    return (
        <Container>
            <Box sx={{ textAlign: "center", p: 2 }}>
                <Typography variant="h4" sx={{ p: 2, color: "#757273" }}>
                    What Our Client Say
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={3}>
                        <figure class="snip1139">
                            <blockquote>
                                Sometimes I think the surest sign that
                                intelligent life exists elsewhere in the
                                universe is that none of it has tried to contact
                                us.
                                <div class="arrow"></div>
                            </blockquote>
                            <img
                                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample3.jpg"
                                alt="sample3"
                            />
                            <div class="author">
                                <h5>
                                    Pelican Steve <span>- LittleThemes</span>
                                </h5>
                            </div>
                        </figure>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <figure class="snip1139 hover">
                            <blockquote>
                                I don't need to compromise on my principles,
                                because they don't have the slightest bearing on
                                what happens to me anyway.
                                <div class="arrow"></div>
                            </blockquote>
                            <img
                                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample47.jpg"
                                alt="sample47"
                            />
                            <div class="author">
                                <h5>
                                    Max Conversion
                                    <span>- LittleThemes</span>
                                </h5>
                            </div>
                        </figure>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <figure class="snip1139">
                            <blockquote>
                                That's the problem with nature, something's
                                always stinging you or oozing mucous all over
                                you. Let's go and watch TV.
                                <div class="arrow"></div>
                            </blockquote>
                            <img
                                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample17.jpg"
                                alt="sample17"
                            />
                            <div class="author">
                                <h5>
                                    Eleanor Faint<span>- LittleThemes</span>
                                </h5>
                            </div>
                        </figure>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <figure class="snip1139">
                            <blockquote>
                                That's the problem with nature, something's
                                always stinging you or oozing mucous all over
                                you. Let's go and watch TV.
                                <div class="arrow"></div>
                            </blockquote>
                            <img
                                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample17.jpg"
                                alt="sample17"
                            />
                            <div class="author">
                                <h5>
                                    Eleanor Faint<span>- LittleThemes</span>
                                </h5>
                            </div>
                        </figure>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default TestomonialSlide;
