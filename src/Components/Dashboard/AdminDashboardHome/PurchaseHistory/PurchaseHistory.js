import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';


const PurchaseHistory = ({ totalBalance }) => {
    return (
        <div>
            <TableContainer component={Paper}>
                <Typography sx={{ ml: 1 }} color="primary" variant="h4" gutterBottom component="div">
                    Recent Orders
                </Typography>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Transaction Id</TableCell>
                            <TableCell>Sale Amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {totalBalance.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.purchase_date}
                                </TableCell>
                                <TableCell>{row.cus_name
                                }</TableCell>
                                <TableCell>{row.cus_email
                                }</TableCell>
                                <TableCell>{row.tran_id
                                }</TableCell>
                                <TableCell> &#2547; {row.total_amount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default PurchaseHistory;

