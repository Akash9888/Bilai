import {
    Box,
    Button,
    Container,
    Grid,
    Input,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";

const AddBlog = () => {
    return (
        <Container>
            <Typography variant="h3" sx={{ m: 3, textAlign: "center" }}>
                Add Blog
            </Typography>
            <form>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={4} md={3} lg={2}>
                        <TextField
                            id="id"
                            type="number"
                            required
                            fullWidth
                            label="Id"></TextField>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={2}>
                        <TextField
                            id="category"
                            type="text"
                            required
                            fullWidth
                            label="Category"></TextField>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={2}>
                        <TextField
                            id="tag"
                            type="text"
                            required
                            fullWidth
                            label="Tag"></TextField>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={2}>
                        <TextField
                            id="date"
                            type="text"
                            required
                            fullWidth
                            label="Publish Date"></TextField>
                    </Grid>

                    <Grid item xs={12} sm={8} md={3} lg={4}>
                        <TextField
                            id="author"
                            type="text"
                            required
                            fullWidth
                            label="Author Name"></TextField>
                    </Grid>

                    <Grid item xs={12} sm={12} md={9} lg={12}>
                        <TextField
                            id="title"
                            type="text"
                            multiline
                            // maxRows={2}
                            required
                            fullWidth
                            label="Blog Title"></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="description"
                            type="text"
                            multiline
                            maxRows={2}
                            required
                            fullWidth
                            label="Blog Description"></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="block1"
                            type="text"
                            multiline
                            maxRows={5}
                            required
                            fullWidth
                            label="Blog Block-1"></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="block2"
                            type="text"
                            multiline
                            maxRows={5}
                            required
                            fullWidth
                            label="Blog Block-2"></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="block3"
                            type="text"
                            multiline
                            maxRows={5}
                            required
                            fullWidth
                            label="Blog Block-3"></TextField>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <div>
                            <Typography variant="body2">
                                Author Image
                            </Typography>
                            <label htmlFor="contained-button-file">
                                <Input
                                    accept="image/*"
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                />
                            </label>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <div>
                            <Typography variant="body2">Blog Image</Typography>
                            <label htmlFor="contained-button-file">
                                <Input
                                    accept="image/*"
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                />
                            </label>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Box sx={{ textAlign: "center" }}>
                            <Button type="submit" variant="contained">
                                Add Blog
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default AddBlog;
