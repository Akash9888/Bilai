import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const AllUser = () => {
    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(false);
    useEffect(() => {
        fetch("http://localhost:5000/allUser")
            .then((res) => res.json())
            .then((data) => {
                console.log(users);
                setUsers(data);
            });
    }, [show]);
    const hadleDelete = (id) => {
        // console.log(id);
        const proceed = window.confirm("Are You Sure You want to delete?");
        if (proceed) {
            const url = `http://localhost:5000/allUser/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        setShow(true);
                        alert("Deleted SuccessFully");
                    }
                });
        }
    };
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
                            {" "}
                            <TableCell align="left">ID</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell align="left">Name</TableCell>
                            {/* <TableCell align="left">ImgUrl</TableCell> */}
                            <TableCell align="left">Role</TableCell>
                            <TableCell align="left">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell align="left">{row._id}</TableCell>
                                <TableCell align="left">{row.email}</TableCell>
                                <TableCell align="left">
                                    {row.displayName}
                                </TableCell>
                                {/* <TableCell align="left">{row.imgUrl}</TableCell> */}
                                <TableCell align="left">
                                    {row.role === "admin" ? (
                                        row.role
                                    ) : (
                                        <p>User</p>
                                    )}
                                </TableCell>
                                <TableCell align="left">
                                    <IconButton
                                        color="secondary"
                                        aria-label="delete"
                                        onClick={() => hadleDelete(row._id)}>
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
