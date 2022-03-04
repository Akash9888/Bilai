import React from 'react';
import { Button, CircularProgress, Container, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import Product from '../Product/Product';
import Cart from './Cart/Cart';
import './shop.css';


const Shop = ({ cart, products, setProducts, handleAddToCart, displayProdcuts, setDisplayProducts }) => {
    const handleSearch = e => {
        const searchText = e.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
    };
    const handleClick = e => {
        const buttonResult = e.target.value;
        const matchedProducts = products.filter(product => product.category
            .toLowerCase() === (buttonResult.toLowerCase()));
        setDisplayProducts(matchedProducts)
    }
    const handleAllItem = e => {
        setDisplayProducts(products);
    }
    return (
        <Box sx={{ mt: 4 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ ml: 2 }}>
                    <TextField
                        fullWidth
                        onChange={handleSearch}
                        id="fullWidth" />
                </Grid>
                <Grid item xs={12} md={5} sx={{ mt: 1 }}>
                    <Button value="All" sx={{ mr: 2 }} size="medium" onClick={handleAllItem} variant="outlined">All</Button>
                    <Button value="Dog" sx={{ mr: 2 }} size="medium" onClick={handleClick} variant="outlined">Dog Item</Button>
                    <Button value="Cat" sx={{ mr: 2 }} size="medium" onClick={handleClick} variant="outlined">Cat Item</Button>
                    <Button value="Toys" sx={{ mr: 2 }} size="medium" onClick={handleClick} variant="outlined">Toy</Button>
                    <Button value="Medicine" sx={{ mr: 2, md: { mt: 2 } }} size="medium" onClick={handleClick} variant="outlined">Medicine</Button>
                </Grid>
                {/* <Grid item xs={4} md={1} sx={{ mt: 1 }}>
                </Grid>
                <Grid item xs={4} md={1} sx={{ mt: 1 }}>
                </Grid>
                <Grid item xs={4} md={1} sx={{ mt: 1 }}>
                </Grid>
                <Grid item xs={4} md={1} sx={{ mt: 1 }}>
                </Grid> */}
            </Grid>

            <div className='shop-container'>
                <Container sx={{ mt: 1 }}>
                    <Grid container justify="center" spacing={1}>
                        {
                            displayProdcuts.length === 0 && <Grid sx={{ mt: 4 }} container spacing={0} direction="column" alignItems="center" justifyContent="center">
                                <Grid item xs={3}>
                                    <CircularProgress />
                                </Grid>
                            </Grid>
                        }
                        {
                            displayProdcuts.map(product => (<Grid item key={product.id} xs={10} sm={6} md={4} lg={4}>
                                <Product product={product} key={product.key}
                                    handleAddToCart={handleAddToCart}
                                ></Product>
                            </Grid>))
                        }
                    </Grid>
                </Container>

                <Box sx={{ display: { xs: "none", md: "block" } }}>

                    <div className="cart-container">
                        <Cart cart={cart}></Cart>
                    </div>
                </Box>
            </div>
        </Box>
    );
};

export default Shop;
