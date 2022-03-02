import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Loading from "../Loader/Loading";
import Blog from "./Blog";
import BlogButton from "./BlogButton";
// import items from "./BlogData";

function BlogFeeds() {
    const [items, setItems] = useState([]);
    const [buttons, setButtons] = useState([]);
    const [blogDetails, setBlogDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:5000/blogs")
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
                setBlogDetails(data);
                // setButtons(new Set(data.map((item) => item.tag)));
                const val = data.map((item) => item.tag);
                // console.log(new Set(val));
                val.unshift("All");
                setButtons(Array.from(new Set(val)));
                setLoading(false);
            });
    }, []);

    //Filter Function
    const filter = (button) => {
        if (button === "All") {
            setBlogDetails(items);
            return;
        }

        console.log("key: " + button);
        const filteredData = items.filter((item) => item.tag === button);
        console.log(filteredData);
        setBlogDetails([]);
        console.log(blogDetails);
        setBlogDetails(filteredData);
        console.log(blogDetails);
    };

    return (
        <Box sx={{ p: 3 }}>
            {loading && <Loading />}
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    {/* <Typography variant="h5">Tag</Typography> */}
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
