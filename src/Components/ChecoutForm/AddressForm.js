import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import { useState } from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import useAuth from '../../hooks/useAuth';

const AddressForm = ({ handleNext }) => {
    const [addressData, setAdressData] = useState({});
    const [products] = useProducts();
    const [cart] = useCart(products);
    const [phone, setPhone] = useState('');

    const { user } = useAuth();

    const mobileRegex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newAdressData = { ...addressData };
        newAdressData[field] = value;
        setAdressData(newAdressData);
    }

    const handleSubmit = () => {
        const order = {
            email: user?.email,
            phone: phone,
            user_order: cart,
            adress: addressData,
        };
        // console.log(order);


        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                if (result.insertedId) {
                    handleNext();
                }
            })
    }
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Shipping Adress
            </Typography>
            <Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First name"
                            fullWidth
                            // defaultValue={user.displayName}
                            onBlur={handleOnBlur}
                            autoComplete="given-name"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last name"
                            fullWidth
                            onBlur={handleOnBlur}
                            autoComplete="family-name"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="phone"
                            name="phone"
                            label="Phone"
                            fullWidth
                            onBlur={e => setPhone(e.target.value)}
                            autoComplete="Phone Number"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address1"
                            name="address1"
                            label="Address line 1"
                            fullWidth
                            onBlur={handleOnBlur}
                            autoComplete="shipping address-line1"
                            variant="standard"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="city"
                            name="city"
                            label="City"
                            fullWidth
                            onBlur={handleOnBlur}
                            autoComplete="shipping address-level2"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="state"
                            name="state"
                            label="State/Province/Region"
                            fullWidth
                            onBlur={handleOnBlur}
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="zip"
                            name="zip"
                            label="Zip / Postal code"
                            fullWidth
                            onBlur={handleOnBlur}
                            autoComplete="shipping postal-code"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="country"
                            name="country"
                            label="Country"
                            fullWidth
                            onBlur={handleOnBlur}
                            autoComplete="shipping country"
                            variant="standard"
                        />
                    </Grid>
                </Grid>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                    <button variant="contained" type="submit" onClick={handleSubmit}>Submit</button>
                </Box>
            </Box>


        </React.Fragment >
    );
};

export default AddressForm;