import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import BlogButton from "./BlogButton";
import items from "./BlogData";

const allTags = ["All", ...new Set(items.map((item) => item.tag))];
// console.log(allTags);
// console.log("items: " + items);

function BlogFeeds() {
    // const blogArray = [1, 2, 3, 4, 5, 6];
    // const [blogList, setBlogList] = useState([]);
    // useEffect(() => {
    //     fetch("Blog.json")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setBlogList(data);
    //         });
    // }, []);
    // console.log("items" + items);
    const [blogDetails, setBlogDetails] = useState(items);
    const [buttons, setButtons] = useState(allTags);
    // console.log("button= " + buttons);

    //Filter Function
    const filter = (button) => {
        if (button === "All") {
            setBlogDetails(items);
            return;
        }

        console.log(button);
        const filteredData = items.filter((item) => item.tag === button);
        console.log("filtered data: " + filteredData);
        setBlogDetails(filteredData);
        console.log("blogDetails :" + blogDetails);
    };

    return (
        // <Container sx={{ mt: 3 }}>
        <Box sx={{ p: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Typography variant="h4">Tag</Typography>
                    <BlogButton button={buttons} filter={filter} />
                </Grid>
                <Grid item xs={12} sm={6} md={8} lg={9}>
                    <Grid container spacing={2}>
                        {blogDetails.map((blog, index) => (
                            // console.log("index: " + index)
                            <Blog
                                key={blog.id}
                                blog={blog}
                                index={index}></Blog>
                        ))}
                    </Grid>
                </Grid>

                {/* <Grid item xs={12} sm={6} md={8} lg={9}>
                    <Grid container spacing={2}>
                        <Box sx={{ flexGrow: 1, backgroundColor: "#32a852" }}>
                            <Grid item xs={12} sm={6} md={4}>
                                {blogDetails.map((blog) => (
                                    <Blog key={blog.id} blog={blog}></Blog>
                                ))}
                            </Grid>
                        </Box>
                    </Grid>
                </Grid> */}

                {/* <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h4">Categories</Typography>
                            <Button
                                variant="outlined"
                                size="small"
                                sx={{ margin: "10px 10px 0px 0px" }}>
                                Pet
                            </Button>
                            <Button
                                variant="outlined"
                                size="small"
                                sx={{ margin: "10px 10px 0px 0px" }}>
                                Cat
                            </Button>
                            <Button
                                variant="outlined"
                                size="small"
                                sx={{ margin: "10px 10px 0px 0px" }}>
                                Dog
                            </Button>
                            <Button
                                variant="outlined"
                                size="small"
                                sx={{ margin: "10px 10px 0px 0px" }}>
                                Rabbit
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h4">Tag</Typography>
                            <Button
                                variant="outlined"
                                size="small"
                                sx={{ margin: "10px 10px 0px 0px" }}>
                                Recipes
                            </Button>
                            <Button
                                variant="outlined"
                                size="small"
                                sx={{ margin: "10px 10px 0px 0px" }}>
                                Grooming
                            </Button>
                            <Button
                                variant="outlined"
                                size="small"
                                sx={{ margin: "10px 10px 0px 0px" }}>
                                Disease Pevention
                            </Button>
                            <Button
                                variant="outlined"
                                size="small"
                                sx={{ margin: "10px 10px 0px 0px" }}>
                                Health & Wellness
                            </Button>
                            <Button
                                variant="outlined"
                                size="small"
                                sx={{ margin: "10px 10px 0px 0px" }}>
                                Skin Health & Dermatology
                            </Button>
                            <Button
                                variant="outlined"
                                size="small"
                                sx={{ margin: "10px 10px 0px 0px" }}>
                                Safety
                            </Button>
                            <Button
                                variant="outlined"
                                size="small"
                                sx={{ margin: "10px 10px 0px 0px" }}>
                                Fleas, Ticks, & Heartworms
                            </Button>
                        </Grid>
                    </Grid>
                </Grid> */}
            </Grid>
        </Box>
    );
}

export default BlogFeeds;
