import React, { useState } from 'react';
import { Box, Button, Container, Grid, Input, TextField, Typography } from "@mui/material";

const AddBlog = () => {
    const [id, setId] = useState('');
    const [category, setCategory] = useState('');
    const [tag, setTag] = useState('');
    const [date, setDate] = useState('');
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [block1, setBlock1] = useState('');
    const [block2, setBlock2] = useState('');
    const [block3, setBlock3] = useState('');
    const [image, setImage] = useState(null);
    const [image2, setImage2] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        // formData.append('addBlog', addBlog);
        formData.append('id', id);
        formData.append('category', category);
        formData.append('tag', tag);
        formData.append('date', date);
        formData.append('author', author);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('block1', block1);
        formData.append('block2', block2);
        formData.append('block3', block3);
        formData.append('authoPic', image);
        formData.append('blogPic', image2);
        fetch('http://localhost:5000/blogs', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log('Success:', result);
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }
    return (
        <div>
            <Container>
                <Typography variant="h3" sx={{ m: 3, textAlign: "center" }}>
                    Add Blog
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={4} md={3} lg={2}>
                            <TextField
                                id="id"
                                type="number"
                                name="id"
                                onBlur={e => setId(e.target.value)}
                                required
                                fullWidth
                                label="Id"></TextField>
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} lg={2}>
                            <TextField
                                id="category"
                                type="text"
                                name="category"
                                onBlur={e => setCategory(e.target.value)}
                                required
                                fullWidth
                                label="Category"></TextField>
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} lg={2}>
                            <TextField
                                id="tag"
                                type="text"
                                name="tag"
                                onBlur={e => setTag(e.target.value)}
                                required
                                fullWidth
                                label="Tag"></TextField>
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} lg={2}>
                            <TextField
                                id="date"
                                type="text"
                                name="date"
                                onBlur={e => setDate(e.target.value)}
                                required
                                fullWidth
                                label="Publish Date"></TextField>
                        </Grid>

                        <Grid item xs={12} sm={8} md={3} lg={4}>
                            <TextField
                                id="author"
                                type="text"
                                name="author"
                                onBlur={e => setAuthor(e.target.value)}
                                required
                                fullWidth
                                label="Author Name"></TextField>
                        </Grid>

                        <Grid item xs={12} sm={12} md={9} lg={12}>
                            <TextField
                                id="title"
                                type="text"
                                name="title"
                                onBlur={e => setTitle(e.target.value)}
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
                                name="description"
                                onBlur={e => setDescription(e.target.value)}
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
                                name="block1"
                                onBlur={e => setBlock1(e.target.value)}
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
                                name="block2"
                                onBlur={e => setBlock2(e.target.value)}
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
                                name="block3"
                                onBlur={e => setBlock3(e.target.value)}
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
                                        type="file"
                                        onChange={e => setImage(e.target.files[0])}
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
                                        type="file"
                                        onChange={e => setImage2(e.target.files[0])}
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
        </div>
    );
};

export default AddBlog;
