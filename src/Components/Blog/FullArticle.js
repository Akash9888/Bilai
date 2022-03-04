import { Chip, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../Loader/Loading";

// import items from "./BlogData";
// const allTags = [...new Set(items.map((item) => item))];
// console.log(allTags);

const FullArticle = () => {
    const [blogDetails, setBlogDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:5000/blogs")
            .then((res) => res.json())
            .then((data) => {
                // setBlogDetails(data.slice(0, 3));
                console.log(data);
                console.log(data[id]);
                console.log(data[id].tag);
                setBlogDetails(data[id]);
                // console.log(blogDetails);
                setLoading(false);
            });
    }, []);
    console.log(blogDetails);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            backgroundColor: "#fcba03",
                            textAlign: "center",

                            alignItems: "center",
                        }}>
                        <Grid item xs={12} sm={12} md={6}>
                            <img
                                style={{
                                    width: "100%",

                                    maxHeight: "300px",
                                    objectFit: "cover",
                                }}
                                alt="author"
                                src={`data:image/png;base64,${blogDetails.blogPic}`}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Box sx={{ m: 1 }}>
                                <Chip
                                    label={blogDetails.tag}
                                    variant="outlined"
                                />
                                <Typography variant="h6">
                                    {blogDetails.title}
                                </Typography>
                                <Typography variant="body2">
                                    {blogDetails.author}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Container sx={{ mt: 4 }}>
                        <Typography variant="body1">
                            {blogDetails.description}
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            {blogDetails.block1}
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 2 }}>
                            {blogDetails.block2}
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            {blogDetails.block3}
                        </Typography>
                    </Container>{" "}
                </>
            )}
        </>
    );
};

export default FullArticle;
