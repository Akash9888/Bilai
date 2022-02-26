import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import { useState } from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import useAuth from '../../hooks/useAuth';
import './AdressForm.css';


const AddressForm = ({ handleNext }) => {

    const [products] = useProducts();
    const [cart] = useCart(products);
    const { user } = useAuth();

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('');
    const [address, setAdress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [country, setCountry] = useState('');
    const [error, setError] = useState('');


    const handleOnchange = e => {
        const value = e.target.value;
        setError({ phone: '' });
        setPhone(value);
        let reg = new RegExp(/^(?:\+88|88)?(01[3-9]\d{8})$/).test(value);
        if (!reg) {
            setError({ phone: "Input a valid Phone Number" })
        }
    };
    const handleSubmit = () => {
        if (firstName === '' || lastName === '' || phone === '' || address === '' || city === '' || state === '' || zipCode === '' || country === '') {
            return;
        }
        const order = {
            email: user?.email,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            address: address,
            city: city,
            state: state,
            zipCode: zipCode,
            country: country,
            user_order: cart,

        };
        console.log(order);


        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
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
                            onBlur={e => setFirstName(e.target.value)}
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
                            onBlur={e => setLastName(e.target.value)}
                            autoComplete="family-name"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="phone"
                            name="phone"
                            value={phone}
                            label="Phone Number"
                            fullWidth
                            onChange={handleOnchange}
                            error={Boolean(error?.phone)}
                            helperText={(error?.phone)}
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
                            onBlur={e => setAdress(e.target.value)}
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
                            onChange={e => setCity(e.target.value)}
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
                            onBlur={e => setState(e.target.value)}
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
                            onChange={e => setZipCode(e.target.value)}
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
                            onBlur={e => setCountry(e.target.value)}
                            autoComplete="shipping country"
                            variant="standard"
                        />
                    </Grid>
                </Grid>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                    <button className="button" variant="contained" type="submit" onClick={handleSubmit}>Submit</button>
                </Box>
            </Box>


        </React.Fragment >
    );
};

export default AddressForm;