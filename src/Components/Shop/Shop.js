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
    // const [products, setProducts] = useState([]);
    // const [cart, setCart] = useCart(products);
    // const [displayProdcuts, setDisplayProducts] = useState([]);
    // useEffect(() => {
    //     fetch('./products.JSON')
    //         .then(res => res.json())
    //         .then(data => {
    //             setProducts(data);
    //             setDisplayProducts(data);
    //         })
    // }, []);

    // const handleAddToCart = (product) => {
    //     const exists = cart.find(pd => pd.key === product.key);
    //     let newCart = [];
    //     if (exists) {
    //         const rest = cart.filter(pd => pd.key !== product.key);
    //         exists.quantity = exists.quantity + 1;
    //         newCart = [...rest, product];
    //     }
    //     else {
    //         product.quantity = 1;
    //         newCart = [...cart, product];
    //     }
    //     setCart(newCart);
    //     // save to local storage (for now)
    //     addToDb(product.key);

    // }

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