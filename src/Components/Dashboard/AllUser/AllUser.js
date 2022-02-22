import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
function createData(email, id, name, imgUrl, role) {
    return { email, id, name, imgUrl, role };
}

const rows = [
    createData(
        "akash.tushar98@gmail.com",
        "_18122787",
        "Akash Chanda",
        "http://akashchanda.img",
        "admin"
        // "delete"
    ),
    createData(
        "kamrul.kanaighat@gmail.com",
        "_18122787asasasa",
        "Kamrul Hasan",
        "http://akasl;fdjfjfkjklajkjalkj.img",
        "user"
        // "delete"
    ),
];
const AllUser = () => {
    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h3" sx={{ m: 2, textAlign: "center" }}>
                All Users
            </Typography>
            <TableContainer component={Paper}>
                <Table
                    sx={{ minWidth: 650 }}
                    size="small"
                    aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Email</TableCell>
                            <TableCell align="left">ID</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">ImgUrl</TableCell>
                            <TableCell align="left">Role</TableCell>
                            <TableCell align="left">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}
                                // sx={{
                                //     "&:last-child td, &:last-child th": {
                                //         border: 0,
                                //     },
                                // }}
                            >
                                <TableCell align="left">{row.email}</TableCell>
                                <TableCell align="left">{row.id}</TableCell>
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="left">{row.imgUrl}</TableCell>
                                <TableCell align="left">{row.role}</TableCell>
                                <TableCell align="left">
                                    <IconButton aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default AllUser;
