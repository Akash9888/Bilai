import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Grid from "@mui/material/Grid";

const DocCard = () => {
    const [docList, setDocList] = useState();
    useEffect(() => {
        fetch("sample.json")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                // setDocList(data);
            });
    }, []);
    // console.log("Hello" + docList);
    // console.log(docList?.length);

    return (
        <Container sx={{ mt: 3 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        {/* {docList.length !== 0 ? (
                            docList.map((doc) => {
                                return <DocCard doc={doc} />;
                            })
                        ) : (
                            <h6>Oposs!You have no notes.</h6>
                        )} */}
                        {docList.map((doctor) => console.log(doctor))}
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default DocCard;
