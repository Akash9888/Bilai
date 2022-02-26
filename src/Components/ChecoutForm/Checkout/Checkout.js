import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from '../AddressForm';
import Review from '../Review';
import { clearTheCart } from '../../../utilities/fakeDb';
import useAuth from '../../../hooks/useAuth';


const steps = ['Shipping address', 'Payment details'];



const theme = createTheme();
const Checkout = ({ cart, setCart }) => {
    const [activeStep, setActiveStep] = React.useState(0);
    const { user } = useAuth();
    // navigate('/path')
    // const [products] = useProducts();

    // console.log(cart);
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = Math.floor(total + shipping + tax);
    const handleSubmit = () => {
        setActiveStep(activeStep + 1);
    };
    const handlePlaceOrder = () => {
        const order = {
            cus_name: user?.displayName,
            cus_email: user?.email,
            // product_name: cart,
            total_amount: grandTotal,

        };
        // console.log(order);
        fetch(`http://localhost:5000/init`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                // navigate(data, { replace: true });
                window.location.replace(data);
                window.location.replace(data);

            });
        setCart([]);
        clearTheCart();

    }
    const getStepContent = step => {
        switch (step) {
            case 0:
                return <AddressForm handleNext={handleSubmit} />;
            case 1:
                return <Review cart={cart} setCart={setCart} total={total} grandTotal={grandTotal} />;
            default:
                throw new Error('Unknown step');
        }
    }
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>

                        <React.Fragment>
                            {getStepContent(activeStep)}
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                {activeStep === steps.length - 1 && <Button
                                    variant="contained" style={{ color: 'white' }} onClick={handlePlaceOrder}>PLACE ORDER</Button>}
                            </Box>
                        </React.Fragment>

                    </React.Fragment>
                </Paper>

            </Container>
        </ThemeProvider>
    );
};

export default Checkout;