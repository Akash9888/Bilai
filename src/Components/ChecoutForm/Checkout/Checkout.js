import { Button, CircularProgress, Container, CssBaseline, Divider, Paper, Step, StepLabel, Stepper, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { commerce } from '../../../lib/commerce';
import { useNavigate } from 'react-router-dom';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    toolbar: theme.mixins.toolbar,
    layout: {
        marginTop: '5%',
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginTop: 60,
        },
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
    divider: {
        margin: '20px 0',
    },
    spinner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
const steps = ["Shipping address", "Payment details", "Review your order"];
const Checkout = ({ cart, onCaptureCheckout, order, error }) => {
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [activeStep, setActiveStep] = useState(0);
    const [shippingData, setShippingData] = useState({});
    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    let Confirmation = () => {
        <div>
            confirmation
        </div>
    }
    const Form = () => (activeStep === 0
        ? <AddressForm />
        : <PaymentForm />);
    return (
        <Container>
            <CssBaseline />
            <Toolbar className={styles.toolbar} />
            <Box className={styles.layout}>
                <Paper className={styles.paper}>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={styles.stepper}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : <Form />}
                </Paper>
            </Box>
        </Container>
    );
};

export default Checkout;