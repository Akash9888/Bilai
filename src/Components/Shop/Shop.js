import { Search } from '@mui/icons-material';
import { Container, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakeDb';
import Product from '../Product/Product';
import Cart from './Cart/Cart';
import './shop.css';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
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
            {/* 
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search> */}

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
