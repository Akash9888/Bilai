import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import { useState } from 'react';
// import useAuth from '../../hooks/useAuth';
import { getStoredCart } from '../../utilities/fakeDb';
import { useEffect } from 'react';

const AddressForm = ({ handleNext }) => {
    const [addressData, setAdressData] = useState({});
    const [order, setOrder] = useState({});


    // const { user } = useAuth();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newAdressData = { ...addressData };
        newAdressData[field] = value;
        setAdressData(newAdressData);
    }
    useEffect(() => {
        const savedCart = getStoredCart();
        // const newData = { order: savedCart };
        setOrder(savedCart);
    }, []);
    // console.log(order);
    // // console.log(addressData);
    // const handleSubmit2 = () => {

    // }
    const handleSubmit = () => {
        // handleSubmit2();
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ addressData, order })
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                if (result.insetedId) {
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
                            id="address1"
                            name="address1"
                            label="Address line 1"
                            fullWidth
                            onBlur={handleOnBlur}
                            autoComplete="shipping address-line1"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="address2"
                            name="address2"
                            label="Address line 2"
                            fullWidth
                            onBlur={handleOnBlur}
                            autoComplete="shipping address-line2"
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
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                </Box>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </Box>


        </React.Fragment >
    );
};

export default AddressForm;