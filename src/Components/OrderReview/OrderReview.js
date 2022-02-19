import React from 'react';
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

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];
const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    // console.log(cart);
    const handleRemove = key => {
        // console.log(key);
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        DeleteFromDb(key);
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
                            <TableCell align="right">Price</TableCell>
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
                                <TableCell align="right">{row.quantity}</TableCell>
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
            <Grid container justifyContent="flex-end">
                <Link to="checkout" style={{ textDecoration: 'none' }}>
                    <Button variant="contained">Proceed To Pay</Button>
                </Link>
            </Grid>

        </Container>
    );
};

export default OrderReview;