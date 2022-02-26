import React, { useState } from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Shop/Cart/Cart';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, CardMedia, Container, Grid, Box, Typography } from '@mui/material';
import { clearTheCart, DeleteFromDb } from '../../utilities/fakeDb';
import { Link } from 'react-router-dom';
import './OrderReview.css';


const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        DeleteFromDb(key);
    };
    const emptyTheCart = () => {
        clearTheCart();
        setCart([]);
        window.location.reload();
    }
    const handleIncreased = key => {
        const retriveObject = JSON.parse(localStorage.getItem('shopping_cart'));
        const keys = Object.keys(retriveObject);
        keys.forEach((item) => {
            if (item === key) {
                retriveObject[key] = parseInt(retriveObject[key]) + 1;
            }
            localStorage.setItem('shopping_cart', JSON.stringify(retriveObject))
        });
        window.location.reload(true);
    };

    const handleReduce = key => {
        const retriveObject = JSON.parse(localStorage.getItem('shopping_cart'));
        const keys = Object.keys(retriveObject);
        keys.forEach((item) => {
            if (item === key) {
                retriveObject[key] = parseInt(retriveObject[key]) - 1;
            }
            localStorage.setItem('shopping_cart', JSON.stringify(retriveObject))
        });
        window.location.reload(true);
    }
    return (

        <Container sx={{ mt: 2 }}>

            {
                cart.length === 0 ? <Box>
                    <Typography variant="h4" gutterBottom component="div">
                        You Have No items in the cart
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        <Link to="/shop" style={{ textDecoration: 'none' }}>Please Add Some</Link>
                    </Typography>

                    <CardMedia
                        component="img"
                        // height="100"
                        image="https://images.pexels.com/photos/953864/pexels-photo-953864.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="empty cart"
                    />

                    {/* </CardMedia> */}
                </Box> : (
                    <Box>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Imgage</TableCell>
                                        <TableCell align="right">Name</TableCell>
                                        <TableCell align="right">Quantity</TableCell>
                                        <TableCell align="right">Unit Price</TableCell>
                                        <TableCell align="right">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {cart.map((row) => (
                                        <TableRow
                                            key={row.key}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                <CardMedia
                                                    component="img"
                                                    height="100"
                                                    image={row.img}
                                                    alt="green iguana"
                                                />
                                            </TableCell>
                                            <TableCell align="right">{row.name}</TableCell>
                                            <TableCell align="right"><Button disabled={row.quantity === 1} onClick={() => handleReduce(row.key)}>-</Button>{row.quantity}<Button onClick={() => handleIncreased(row.key)}>+</Button></TableCell>
                                            <TableCell align="right">{row.price}</TableCell>
                                            <TableCell align="right"><Button onClick={() => handleRemove(row.key)}>Remove</Button></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Grid container justifyContent="flex-end">
                            {/* <h1>{products.length}</h1> */}
                            <br />
                            {/* <h1>{cart?.length}</h1> */}
                            <br />
                            <Cart cart={cart}></Cart>

                        </Grid>
                        <Grid container justifyContent="flex-end" sx={{ mb: 2 }}>
                            <Button onClick={emptyTheCart} variant="contained">Empty The Cart</Button>
                        </Grid>
                        <Grid container justifyContent="flex-end">
                            <Link to="checkout" style={{ textDecoration: 'none' }}>
                                <Button variant="contained">Proceed To Pay</Button>
                            </Link>
                        </Grid>
                    </Box>
                )
            }

            {/* {
                cart.length === 0 ? <p>Empty Cart</p> :
                   
            } */}


        </Container>
    );
};

export default OrderReview;