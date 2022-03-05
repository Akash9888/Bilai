import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, TablePagination } from '@mui/material';

const OrderDetails = () => {
    const [orderDetails, setOrderDetails] = useState([]);
    const pages = [5, 10, 25];
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
    const handleChange = (event, newPage) => {
        setPage(newPage);
    };
    const handleRowsPerChange = e => {
        setRowsPerPage(parseInt(e.target.value, 10));
        setPage(0);
    }
    const recordsAfterPagingAndSorting = () => {
        return orderDetails.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    }
    useEffect(() => {
        fetch('http://localhost:5000/orderDetails')
            .then(res => res.json())
            .then(data => setOrderDetails(data))
    }, [orderDetails])
    return (
        <div>
            <TableContainer component={Paper}>
                <Typography sx={{ ml: 1 }} color="primary" variant="h4" gutterBottom component="div">
                    ORDER DETAILS
                </Typography>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Unique Id</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Adress</TableCell>
                            {/* <TableCell>User Order</TableCell> */}
                            <TableCell>Order Quantity</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {recordsAfterPagingAndSorting().map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.uniqueId}
                                </TableCell>
                                <TableCell>{row.email
                                }</TableCell>
                                <TableCell>{row.phone
                                }</TableCell>
                                <TableCell>{row.address},{row?.city},{row?.state}
                                </TableCell>
                                <TableCell>{row.user_order.length}
                                </TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>

            </TableContainer>
            <TablePagination
                component="div"
                page={page}
                rowsPerPageOptions={pages}
                rowsPerPage={rowsPerPage}
                count={orderDetails.length}
                onPageChange={handleChange}
                onRowsPerPageChange={handleRowsPerChange}
            />
        </div>
    );
};

export default OrderDetails;