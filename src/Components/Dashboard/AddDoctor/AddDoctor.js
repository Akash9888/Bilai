import {
    Box,
    Button,
    Container,
    Grid,
    Input,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";

const AddDoctor = () => {
    return (
        <Container>
            <Typography variant="h3" sx={{ m: 3, textAlign: "center" }}>
                Add Doctor
            </Typography>
            <form>
                <Grid container spacing={2}>
                    <Grid item xs={4} sm={4} md={2}>
                        <TextField
                            id="id"
                            name="id"
                            type="number"
                            required
                            fullWidth
                            label="Id"></TextField>
                    </Grid>
                    <Grid item xs={8} sm={8} md={4}>
                        <TextField
                            id="registrationNumber"
                            name="registrationNumber"
                            type="text"
                            required
                            fullWidth
                            label="Registration Number"></TextField>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            id="name"
                            type="text"
                            name="name"
                            required
                            fullWidth
                            label="Doctor Name"></TextField>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            id="experience"
                            type="text"
                            name="experience"
                            required
                            fullWidth
                            label="Experience"></TextField>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            id="qualification"
                            name="qualification"
                            type="text"
                            required
                            fullWidth
                            multiline
                            maxRows={3}
                            label="Qualification"></TextField>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            id="designation"
                            name="designation"
                            type="text"
                            required
                            fullWidth
                            multiline
                            maxRows={3}
                            label="Designation"></TextField>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            id="expertise"
                            name="expertise"
                            type="text"
                            required
                            fullWidth
                            multiline
                            maxRows={3}
                            label="Expertise"></TextField>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            id="organization"
                            name="oraganization"
                            type="text"
                            required
                            fullWidth
                            multiline
                            maxRows={3}
                            label="Organization"></TextField>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            id="address"
                            name="address"
                            type="text"
                            required
                            fullWidth
                            multiline
                            maxRows={3}
                            label="Chamber Address"></TextField>
                    </Grid>

                    <Grid item xs={12} sm={8} md={6}>
                        <TextField
                            id="visitHour"
                            name="visitHour"
                            type="text"
                            required
                            fullWidth
                            label="Visiting Hours"></TextField>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            id="phone"
                            name="phone"
                            type="number"
                            required
                            fullWidth
                            label="Phone Number"></TextField>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            id="email"
                            name="email"
                            type="email"
                            required
                            fullWidth
                            label="Email"></TextField>
                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                        <div>
                            <Typography variant="body2">
                                Doctor Image
                            </Typography>
                            <label htmlFor="contained-button-file">
                                <Input
                                    accept="image/*"
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                />
                            </label>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12}>
                        <Box sx={{ textAlign: "center" }}>
                            <Button type="submit" variant="contained">
                                Add Doctor
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default AddDoctor;
