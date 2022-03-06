import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, TablePagination } from '@mui/material';

const PurchaseHistory = ({ totalBalance }) => {

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
        return totalBalance.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    }
    return (
        <div>
            <TableContainer component={Paper}>
                <Typography sx={{ ml: 1 }} color="primary" variant="h4" gutterBottom component="div">
                    Recent Payments
                </Typography>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Transaction Id</TableCell>
                            <TableCell>Unique Id</TableCell>
                            <TableCell>Sale Amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {recordsAfterPagingAndSorting().map((row) => (
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
                                <TableCell>{row.uniqueID
                                }</TableCell>
                                <TableCell> &#2547; {row.total_amount}</TableCell>
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
                count={totalBalance.length}
                onPageChange={handleChange}
                onRowsPerPageChange={handleRowsPerChange}
            />
        </div>
    );
};

export default PurchaseHistory;

