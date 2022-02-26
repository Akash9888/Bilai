import React, { useState } from 'react';
// import { PhotoCamera } from "@mui/icons-material";
import {
    Alert,
    Box,
    Button,
    Container,
    Grid,
    Input,
    TextField,
    Typography,
} from "@mui/material";
const AddProduct = () => {
    const [key, setKey] = useState('');
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [seller, setSeller] = useState('');
    const [stock, setStock] = useState('');
    const [star, setStar] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [shipping, setShipping] = useState('');
    const [img, setImg] = useState(null);

    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        // console.log('object');
        if (!img) {
            return;
        }
        const formData = new FormData();

        formData.append('key', key);
        formData.append('category', category);
        formData.append('name', name);
        formData.append('seller', seller);
        formData.append('stock', stock);
        formData.append('star', star);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('shipping', shipping);
        formData.append('img', img);


        fetch('http://localhost:5000/allProducts', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                setSuccess('Product Added Successfully');
            })
            .catch(error => {
                console.error('Error:', error);
            });

        // console.log(formData);
    }
    return (
        <div>
            <Container>
                <Typography variant="h3" sx={{ m: 3, textAlign: "center" }}>
                    Add Product
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={4} md={3} lg={2}>
                            <TextField
                                id="key"
                                type="number"
                                name="key"
                                onBlur={e => setKey(e.target.value)}
                                required
                                fullWidth
                                label="Key"></TextField>
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

                        <Grid item xs={6} sm={4} md={3} lg={3}>
                            <TextField
                                id="seller"
                                type="text"
                                name="seller"
                                onBlur={e => setSeller(e.target.value)}
                                required
                                fullWidth
                                label="Seller Name"></TextField>
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} lg={2}>
                            <TextField
                                id="stock"
                                name="stock"
                                type="number"
                                onBlur={e => setStock(e.target.value)}
                                required
                                fullWidth
                                label="Stock"></TextField>
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} lg={3}>
                            <TextField
                                id="star"
                                type="number"
                                name="star"
                                onBlur={e => setStar(e.target.value)}
                                required
                                fullWidth
                                label="Star"></TextField>
                        </Grid>

                        <Grid item xs={6} sm={4} md={3} lg={2}>
                            <TextField
                                id="price"
                                type="number"
                                name="price"
                                onBlur={e => setPrice(e.target.value)}
                                required
                                fullWidth
                                label="Product Price"></TextField>
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} lg={2}>
                            <TextField
                                id="shipping"
                                type="number"
                                name="shipping"
                                onBlur={e => setShipping(e.target.value)}
                                required
                                fullWidth
                                label="Shipping Coast"></TextField>
                        </Grid>
                        <Grid item xs={6} sm={8} md={3} lg={8}>
                            <TextField
                                id="name"
                                type="text"
                                name="name"

                                onBlur={e => setName(e.target.value)}
                                multiline
                                maxRows={2}
                                required
                                fullWidth
                                label="Product Name"></TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="description"
                                type="text"
                                multiline
                                name="description"
                                onBlur={e => setDescription(e.target.value)}
                                maxRows={5}
                                required
                                fullWidth
                                label="Product Description"></TextField>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <div>
                                <Typography variant="body2">
                                    Product Image
                                </Typography>
                                <label htmlFor="contained-button-file">
                                    <Input
                                        accept="image/*"
                                        id="contained-button-file"
                                        type='file'
                                        onChange={e => setImg(e.target.files[0])}
                                    />
                                </label>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <Box sx={{ textAlign: "center" }}>
                                <Button type="submit" variant="contained">
                                    Add Product
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </form>
                {
                    success && <Alert severity="success">{success}!</Alert>

                }
            </Container>
        </div>
    );
};

export default AddProduct;
