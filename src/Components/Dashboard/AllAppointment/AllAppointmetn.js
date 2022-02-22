import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));




export default function CustomizedTables() {
    const [appointments, setAppointments] = React.useState([]);
    const [modified, setModified] = React.useState(false);

    React.useEffect(() => {
        fetch(`http://localhost:5000/dashboard/allAppointment`)
            .then(res => res.json())
            .then(data => setAppointments(data));

    }, [appointments])
    const updateField = id => {
        fetch(`http://localhost:5000/dashboard/allAppointment/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application.json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setModified(true);
                }
            })
        // .then(res=>res.json())
        // .then(data => console.log(data));
    }
    const hadleDelete = id => {
        // console.log(id);
        const proceed = window.confirm('Are You Sure You want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/appoitments/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted SuccessFully');
                    }
                })
        }
    }
    return (
        <Grid container justifyContent="center">
            <Box sx={{ ml: 4, mt: 2 }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Customer Name</StyledTableCell>
                                <StyledTableCell align="right">Email</StyledTableCell>
                                <StyledTableCell align="right">Phone</StyledTableCell>
                                <StyledTableCell align="right">Time</StyledTableCell>
                                <StyledTableCell align="right">Doctor Name</StyledTableCell>
                                <StyledTableCell align="right">Date</StyledTableCell>
                                <StyledTableCell align="right">Action</StyledTableCell>
                                <StyledTableCell align="right">Delete</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {appointments.map((row) => (
                                <StyledTableRow key={row._id}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.email}</StyledTableCell>
                                    <StyledTableCell align="right">{row.phone}</StyledTableCell>
                                    <StyledTableCell align="right">{row.time}</StyledTableCell>
                                    <StyledTableCell align="right">{row.doctorName}</StyledTableCell>
                                    <StyledTableCell align="right">{row.date}</StyledTableCell>
                                    <StyledTableCell align="right">
                                        {
                                            row?.status === 'Approved' ? <p>Approved</p> :
                                                <Button onClick={() => updateField(row._id)}>Approve</Button>
                                        }
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        <Button vaariant="outlined" color="error" onClick={() => hadleDelete(row._id)}>Delete</Button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Grid>



    );
}