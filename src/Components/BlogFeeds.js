import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Blog from "./Blog";

function BlogFeeds() {
    return (
        <div sx={{ display: "flex" }}>
            <Blog />

            <Blog />
        </div>
    );
}

export default BlogFeeds;
