import { Container, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakeDb';
import Product from '../Product/Product';
import Cart from './Cart/Cart';
import './shop.css';
// import Search from '@mui/icons-material/Search';
import useCart from '../../hooks/useCart';

const Shop = ({ cart, products, setProducts, handleAddToCart, displayProdcuts, setDisplayProducts }) => {
    const handleSearch = e => {
        const searchText = e.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        // console.log(matchedProducts.length);
        setDisplayProducts(matchedProducts);

    };
    return (
        <Box sx={{ mt: 4 }}>
            <Box
                sx={{
                    width: 800,
                    maxWidth: '100%',
                    marginLeft: '20px'
                }}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <TextField
                    fullWidth
                    onChange={handleSearch}
                    id="fullWidth" />
            </Box>
            <div className='shop-container'>
                <Container sx={{ mt: 1 }}>
                    <Grid container justify="center" spacing={1}>
                        {
                            displayProdcuts.map(product => (<Grid item key={product.id} xs={10} sm={6} md={4} lg={4}>
                                <Product product={product} key={product.key}
                                    handleAddToCart={handleAddToCart}
                                ></Product>
                            </Grid>))
                        }
                    </Grid>
                </Container>

                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </Box>
    );
};

export default Shop;