import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import DocCard from "./DocCard";

const DocFeeds = () => {
    const [docList, setDocList] = useState([]);
    useEffect(() => {
        fetch("sample.json")
            .then((res) => res.json())
            .then((data) => {
                setDocList(data);
            });
    }, []);
    return (
        <>
            <Container sx={{ mt: 3 }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={1}>
                        {docList.map((doc) => (
                            <DocCard key={doc.id} doc={doc}></DocCard>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default DocFeeds;
