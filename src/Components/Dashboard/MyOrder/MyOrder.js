import { Container, Typography, CardMedia } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const MyOrder = () => {
    const [myOrder, setMyOrder] = useState([]);
    const [singleOrder, setSingleOrder] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrder(data))
    }, [])
    // console.log(myOrder);
    return (
        <Container sx={{ mt: 2 }}>
            <Typography variant="h4" color="primary" gutterBottom component="div" align="center">
                TOTAL ORDER {myOrder.length}
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="lect">Image</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell align="left">Quantity</TableCell>
                            <TableCell align="left">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {myOrder.user_order?.map((row) => (
                            
                        ))} */}
                        {
                            myOrder.map((orders) => {
                                orders?.user_order.map((row) => {
                                    <TableRow

                                        key={row._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="right">
                                            <CardMedia
                                                component="img"
                                                height="100"
                                                image={row.img}
                                                alt="empty cart"
                                            /></TableCell>

                                        <TableCell component="th" scope="row">
                                            {row?.name}
                                        </TableCell>
                                        <TableCell align="left">{row.quantity}</TableCell>
                                        <TableCell align="left">{row.price}</TableCell>
                                    </TableRow>
                                })
                            })
                        }

                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default MyOrder;