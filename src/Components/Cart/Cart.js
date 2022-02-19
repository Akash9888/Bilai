// import { useTheme } from '@emotion/react';
import { Button, Container, Grid, LinearProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartIem/CartItem';
// import useTheme from '@material-ui/core/styles/useTheme';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import { CircularProgress } from '@material-ui/core';

// import { jsx, css } from '@emotion/core';
const Cart = ({ cart, handleRemoveFromCart, handleUpdateQuantity, handleEmptyCart }) => {

    const EmptyCart = () => (
        <Typography variant='subtitle1'>You have no items in your shopping Cart,<Link to='/shop'>Start Adding Some</Link></Typography>
    );
    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>

                        <CartItem item={item} handleRemoveFromCart={handleRemoveFromCart} handleUpdateQuantity={handleUpdateQuantity} handleEmptyCart={handleEmptyCart} />
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ display: 'flex', marginTop: '10%', width: '100%', justifyContent: 'space-between' }}>
                <Typography variant="h4">&#2547; {cart.subtotal.formatted_with_code}</Typography>
                <Box sx={{ display: 'flex' }}>
                    <Button onClick={handleEmptyCart} sx={{ minWidth: '150px', mr: 1 }} size="large" type="button" variant="contained" color="secondary" >Empty cart</Button>
                    <Button sx={{ minWidth: "'150px" }} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </Box>
            </Box>
        </>
    );
    if (!cart.line_items) {
        return (
            <Box sx={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <LinearProgress />
            </Box>
        )
    }
    return (
        <Container sx={{ mt: 4 }}>

            <Typography variant="h4" gutterBottom component="div" align='center' sx={{ mb: 4 }}>
                YOUR SHOPPING CART
            </Typography>
            {
                !cart.line_items.length ? <EmptyCart /> : <FilledCart />
            }
        </Container>
    );
};

export default Cart;