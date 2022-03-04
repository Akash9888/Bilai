import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
// console.log(items);
import { Link } from "react-router-dom";
import Loading from "../Loader/Loading";

const SampleBlog = () => {
    const [blogDetails, setBlogDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:5000/blogs")
            .then((res) => res.json())
            .then((data) => {
                setBlogDetails(data.slice(0, 3));
                setLoading(false);
            });
    }, []);

    return (
        <Container sx={{ p: 2 }}>
            <Typography
                variant="h4"
                sx={{ textAlign: "center", p: 2, color: "#757273" }}>
                Read Blog
            </Typography>

            <div>
                {" "}
                {loading && <Loading />}
                <Grid container spacing={2}>
                    {blogDetails.map((blog, index) => (
                        // console.log("index: " + index)
                        <Blog key={blog.id} blog={blog} index={index}></Blog>
                    ))}
                </Grid>
                <Link to="blogfeed" style={{ textDecoration: "none" }}>
                    <Box sx={{ p: 3, textAlign: "center" }}>
                        <Button variant="outlined">Read More</Button>
                    </Box>
                </Link>
            </div>
        </Container>
    );
};

export default SampleBlog;
