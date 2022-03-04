import { Box } from "@mui/material";
import React from "react";
import loading from "./Loader.gif";
const Loading = () => {
    return (
        <Box sx={{ textAlign: "center", p: 5 }}>
            <img src={loading} alt="loading" />
        </Box>
    );
};

export default Loading;
