import { Chip, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useParams } from "react-router";

import items from "./BlogData";
// const allTags = [...new Set(items.map((item) => item))];
// console.log(allTags);

const FullArticle = () => {
    const { id } = useParams();
    const allTags = [...new Set(items.map((item) => item))];
    console.log(id);
    console.log(allTags[id].author);

    return (
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
                        src={allTags[id].blogPic} />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Box sx={{ m: 1 }}>
                        <Chip label={allTags[id].tag} variant="outlined" />
                        <Typography variant="h6">
                            {allTags[id].title}
                        </Typography>
                        <Typography variant="body2">
                            {allTags[id].author}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

            <Container sx={{ mt: 4 }}>
                <Typography variant="body1">
                    {allTags[id].description}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    {allTags[id].block1}
                </Typography>

                <Typography variant="body1" sx={{ mb: 2 }}>
                    {allTags[id].block2}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    {allTags[id].block3}
                </Typography>
            </Container>
        </>
    );
};

export default FullArticle;
