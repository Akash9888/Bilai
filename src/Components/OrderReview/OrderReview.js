import React, { useState } from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Shop/Cart/Cart';
// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, CardMedia, Container, Grid } from '@mui/material';
import { DeleteFromDb } from '../../utilities/fakeDb';
import { Link } from 'react-router-dom';


const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const [emptyCart, setEmptyCart] = useState(false);
    // if (cart.length === 0) {
    //     setEmptyCart(true);
    // } else {
    //     setEmptyCart(false);
    // }
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        DeleteFromDb(key);
    };

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
            {
                cart.length === 0 ? <p>Empty Cart</p> :
                    <Grid container justifyContent="flex-end">
                        <Link to="checkout" style={{ textDecoration: 'none' }}>
                            <Button variant="contained">Proceed To Pay</Button>
                        </Link>
                    </Grid>
            }

        </Container>
    );
};

export default OrderReview;