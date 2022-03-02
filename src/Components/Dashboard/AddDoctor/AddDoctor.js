import React, { useState } from "react";
import { Box, Button, Container, Grid, Input, TextField, Typography } from "@mui/material";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';

const SweetAlert = withSwalInstance(swal);

const AddDoctor = () => {
    const [id, setId] = useState('');
    const [registrationNumber, SetRegistrationNumber] = useState('');
    const [name, setName] = useState('');
    const [qualification, setQualification] = useState('');
    const [designation, setDesignation] = useState('');
    const [expertise, setExpertise] = useState('');
    const [experience, setExperience] = useState('');
    const [organization, setOrganization] = useState('');
    const [address, setAddress] = useState('');
    const [visitHour, setVisitHour] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [imgUrl, setImgUrl] = useState(null);
    const [success, setSuccess] = useState(false);

    const resetForm = () => {
        setId('');
        SetRegistrationNumber('')
        setName('');
        setQualification('');
        setDesignation('');
        setOrganization('');
        setExperience('');
        setExpertise('')
        setAddress('');
        setVisitHour('');
        setPhone('');
        setEmail('');
        setImgUrl('');
        setSuccess('')
    }
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
        formData.append('experience', experience);
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
                Swal.fire(
                    'Doctor Added Successfully!'
                );
            })
            .catch(error => {
                console.error('Error:', error);
            });
        resetForm();
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
                            value={id}
                            onChange={e => setId(e.target.value)}
                            required
                            fullWidth
                            label="Id" />
                    </Grid>
                    <Grid item xs={8} sm={8} md={4}>
                        <TextField
                            id="registrationNumber"
                            name="registrationNumber"
                            type="text"
                            value={registrationNumber}
                            onChange={e => SetRegistrationNumber(e.target.value)}
                            required
                            fullWidth
                            label="Registration Number" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            id="name"
                            type="text"
                            name="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                            fullWidth
                            label="Doctor Name"></TextField>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            id="experience"
                            type="text"
                            name="experience"
                            value={experience}
                            onChange={e => setExperience(e.target.value)}
                            required
                            fullWidth
                            label="Experience" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            id="qualification"
                            name="qualification"
                            type="text"
                            required
                            fullWidth
                            value={qualification}
                            onChange={e => setQualification(e.target.value)}
                            multiline
                            maxRows={3}
                            label="Qualification" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            id="designation"
                            name="designation"
                            type="text"
                            required
                            fullWidth
                            value={designation}
                            onChange={e => setDesignation(e.target.value)}
                            multiline
                            maxRows={3}
                            label="Designation" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            id="expertise"
                            name="expertise"
                            type="text"
                            required
                            fullWidth
                            value={expertise}
                            onChange={e => setExpertise(e.target.value)}
                            multiline
                            maxRows={3}
                            label="Expertise" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            id="organization"
                            name="organization"
                            type="text"
                            required
                            fullWidth
                            value={organization}
                            onChange={e => setOrganization(e.target.value)}
                            multiline
                            maxRows={3}
                            label="Organization" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            id="address"
                            name="address"
                            type="text"
                            required
                            fullWidth
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                            multiline
                            maxRows={3}
                            label="Chamber Address" />
                    </Grid>

                    <Grid item xs={12} sm={8} md={6}>
                        <TextField
                            id="visitHour"
                            name="visitHour"
                            type="text"
                            value={visitHour}
                            onChange={e => setVisitHour(e.target.value)}
                            required
                            fullWidth
                            label="Visiting Hours" />
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            id="phone"
                            name="phone"
                            type="number"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            required
                            fullWidth
                            label="Phone Number" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            fullWidth
                            label="Email" />
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
        </Container>
    );
};

export default AddDoctor;
