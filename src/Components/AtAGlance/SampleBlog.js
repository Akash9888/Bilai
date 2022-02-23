import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Blog from "../Blog/Blog";
import items from "../Blog/BlogData";
// console.log(items);
import { Link } from "react-router-dom";

// const allTags = [...new Set(items.map((item) => item.tag))];
const allTags = items.slice(0, 3);
// console.log(allTags);
const SampleBlog = () => {
    return (
        <Container sx={{ p: 2 }}>
            <Typography
                variant="h4"
                sx={{ textAlign: "center", p: 2, color: "#757273" }}>
                Read Blog
            </Typography>
            {/* <Grid container spacing={2}> */}
            {/* <Grid item xs={12} sm={12} md={4}> */}
            <Grid container spacing={2}>
                {allTags.map((blog, index) => (
                    // console.log("index: " + index)
                    <Blog key={blog.id} blog={blog} index={index}></Blog>
                ))}
            </Grid>
            {/* </Grid> */}
            {/* </Grid> */}

            <Link to="blogfeed" style={{ textDecoration: "none" }}>
                <Box sx={{ p: 3, textAlign: "center" }}>
                    <Button variant="outlined">Read More</Button>
                </Box>
            </Link>
        </Container>
    );
};

export default SampleBlog;
