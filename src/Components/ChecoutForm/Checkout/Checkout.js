import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import Review from '../Review';
import { clearTheCart, getStoredCart } from '../../../utilities/fakeDb';



const steps = ['Shipping address', 'Payment details'];



const theme = createTheme();
const Checkout = ({ cart, setCart }) => {
    const [activeStep, setActiveStep] = React.useState(0);


    const handleSubmit = () => {

        setActiveStep(activeStep + 1);
    };
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };
    const getStepContent = step => {

        switch (step) {
            case 0:
                return <AddressForm handleNext={handleSubmit} />;
            case 1:
                return <Review cart={cart} setCart={setCart} />;
            default:
                throw new Error('Unknown step');
        }

    }
    const handlePlaceOrder = () => {
        setCart([]);
        clearTheCart();
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