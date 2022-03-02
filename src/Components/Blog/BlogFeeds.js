import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import BlogButton from "./BlogButton";



function BlogFeeds() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    // console.log(allTags2);
    const allTags = ["All", ...new Set(items.map((item) => (item.tag)))];
    console.log(allTags);
    const [blogDetails, setBlogDetails] = useState(items);
    const [buttons, setButtons] = useState(allTags);
    // console.log("buttons: " + buttons);

    //Filter Function
    const filter = (button) => {
        if (button === "All") {
            setBlogDetails(items);
            return;
        }
        const filteredData = items.filter((item) => item.tag === button);
        setBlogDetails(filteredData);

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
            </Grid>
        </Box>
    );
}

export default BlogFeeds;
