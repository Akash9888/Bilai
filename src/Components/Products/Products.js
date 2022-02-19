import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Product from './Product/Product';


const Products = ({ products, onAddToCart }) => {
    return (
        <Box sx={{ backgroundColor: '' }}>
            <Container sx={{ mt: 4 }}>

                <Grid container justify="center" spacing={4}>
                    {
                        products.map((product) => (
                            <Grid item key={product.id} xs={12} sm={6} md={4} lg={4}>
                                {/* <Product product={product} /> */}
                                <Product product={product} onAddToCart={onAddToCart}></Product>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;