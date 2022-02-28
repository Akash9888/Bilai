import {
    Alert,
    Box,
    Button,
    Container,
    Grid,
    Input,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";

const AddDoctor = () => {
    const [id, setId] = useState('');
    const [registrationNumber, SetRegistrationNumber] = useState('');
    const [name, setName] = useState('');
    const [qualification, setQualification] = useState('');
    const [designation, setDesignation] = useState('');
    const [expertise, setExpertise] = useState('');
    const [organization, setOrganization] = useState('');
    const [address, setAddress] = useState('');
    const [visitHour, setVisitHour] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [imgUrl, setImgUrl] = useState(null);


    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        // console.log('object');
        if (!imgUrl) {
            return;
        }

        const formData = new FormData();

        formData.append('id', id);
        formData.append('registrationNumber', registrationNumber);
        formData.append('name', name);
        formData.append('qualification', qualification);
        formData.append('designation', designation);
        formData.append('expertise', expertise);
        formData.append('organization', organization);
        formData.append('address', address);
        formData.append('visitHour', visitHour);
        formData.append('phone', phone);
        formData.append('email', email);
        formData.append('imgUrl', imgUrl);


        fetch('http://localhost:5000/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                setSuccess('Doctor Added Successfully');
            })
            .catch(error => {
                console.error('Error:', error);
            });

        // console.log(formData);
    }
    return (
        <Container>
            <Typography variant="h3" sx={{ m: 3, textAlign: "center" }}>
                Add Doctor
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={4} sm={4} md={2}>
                        <TextField
                            id="id"
                            name="id"
                            type="number"
                            onBlur={e => setId(e.target.value)}
                            required
                            fullWidth
                            label="Id"></TextField>
                    </Grid>
                    <Grid item xs={8} sm={8} md={4}>
                        <TextField
                            id="registrationNumber"
                            name="registrationNumber"
                            type="text"
                            onBlur={e => SetRegistrationNumber(e.target.value)}
                            required
                            fullWidth
                            label="Registration Number"></TextField>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            id="name"
                            type="text"
                            name="name"
                            onBlur={e => setName(e.target.value)}
                            required
                            fullWidth
                            label="Doctor Name"></TextField>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            id="experience"
                            type="text"
                            name="experience"
                            onBlur={e => setId(e.target.value)}
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
                            onBlur={e => setQualification(e.target.value)}
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
                            onBlur={e => setDesignation(e.target.value)}
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
                            onBlur={e => setExpertise(e.target.value)}
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
                            onBlur={e => setOrganization(e.target.value)}
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
                            onBlur={e => setAddress(e.target.value)}
                            multiline
                            maxRows={3}
                            label="Chamber Address"></TextField>
                    </Grid>

                    <Grid item xs={12} sm={8} md={6}>
                        <TextField
                            id="visitHour"
                            name="visitHour"
                            type="text"
                            onBlur={e => setVisitHour(e.target.value)}
                            required
                            fullWidth
                            label="Visiting Hours"></TextField>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            id="phone"
                            name="phone"
                            type="number"
                            onBlur={e => setPhone(e.target.value)}
                            required
                            fullWidth
                            label="Phone Number"></TextField>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            id="email"
                            name="email"
                            type="email"
                            onBlur={e => setEmail(e.target.value)}
                            required
                            fullWidth
                            label="Email"></TextField>
                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                        <div>
                            <Typography variant="body2">
                                Add Doctor
                            </Typography>
                            <label htmlFor="contained-button-file">
                                <Input
                                    accept="image/*"
                                    id="contained-button-file"
                                    type='file'
                                    onChange={e => setImgUrl(e.target.files[0])}
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
            {
                success && <Alert severity="success">{success}!</Alert>

            }
        </Container>
    );
};

export default AddDoctor;
