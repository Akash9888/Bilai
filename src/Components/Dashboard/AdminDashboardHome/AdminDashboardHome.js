import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Chart from './Chart/Chart';
import Balance from './Balance/Balance';
import PurchaseHistory from './PurchaseHistory/PurchaseHistory';
import TotalAppointmentMade from './TotalAppointmnetMade/TotalAppointmentMade';
import OrderDetails from './OrderDetails/OrderDetails';

const AdminDashboardHome = () => {
    const [totalBalance, setTotalBalance] = useState([]);
    const [totalAppointment, SetTotalAppointment] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/purchase')
            .then(res => res.json())
            .then(data => setTotalBalance(data))
    }, [totalBalance])

    useEffect(() => {
        fetch(`http://localhost:5000/dashboard/allAppointment`)
            .then(res => res.json())
            .then(data => SetTotalAppointment(data));

    }, [totalAppointment]);

    return (
        <Container sx={{ mt: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={4} >
                    <Chart totalBalance={totalBalance} totalAppointment={totalAppointment} />
                </Grid>
                <Grid item xs={6} md={4}>
                    <TotalAppointmentMade totalAppointment={totalAppointment} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Balance totalBalance={totalBalance} />
                </Grid>
                <Grid item xs={12} md={12}>
                    <PurchaseHistory totalBalance={totalBalance} />
                </Grid>
                <Grid item xs={12} md={12}>
                    <OrderDetails />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AdminDashboardHome;