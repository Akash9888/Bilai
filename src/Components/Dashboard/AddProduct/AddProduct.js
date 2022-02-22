import { PhotoCamera } from "@mui/icons-material";
import {
    Box,
    Button,
    Container,
    Grid,
    IconButton,
    Input,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";

const AddProduct = () => {
    return (
        <Container>
            <Typography variant="h3" sx={{ m: 3, textAlign: "center" }}>
                Add Product
            </Typography>
            <form>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={4} md={3} lg={2}>
                        <TextField
                            id="key"
                            name="key"
                            type="number"
                            required
                            fullWidth
                            label="Key"></TextField>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={2}>
                        <TextField
                            id="category"
                            name="category"
                            type="text"
                            required
                            fullWidth
                            label="Category"></TextField>
                    </Grid>

                    <Grid item xs={6} sm={4} md={3} lg={3}>
                        <TextField
                            id="seller"
                            name="seller"
                            type="text"
                            required
                            fullWidth
                            label="Seller Name"></TextField>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={2}>
                        <TextField
                            id="stock"
                            name="stock"
                            type="number"
                            required
                            fullWidth
                            label="Stock"></TextField>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={3}>
                        <TextField
                            id="star"
                            name="star"
                            type="number"
                            required
                            fullWidth
                            label="Star"></TextField>
                    </Grid>

                    <Grid item xs={6} sm={4} md={3} lg={2}>
                        <TextField
                            id="price"
                            name="price"
                            type="number"
                            required
                            fullWidth
                            label="Product Price"></TextField>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={2}>
                        <TextField
                            id="shipping"
                            name="shipping"
                            type="number"
                            required
                            fullWidth
                            label="Shipping Coast"></TextField>
                    </Grid>
                    <Grid item xs={6} sm={8} md={3} lg={8}>
                        <TextField
                            id="name"
                            name="name"
                            type="text"
                            multiline
                            maxRows={2}
                            required
                            fullWidth
                            label="Product Name"></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="description"
                            name="description"
                            type="text"
                            multiline
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
                                    multiple
                                    type="file"
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
        </Container>
    );
};

export default AddProduct;
