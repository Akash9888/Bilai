import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Calendar from '../../../Shared/Calendar/Calendar';
import AdminDashboardHome from '../AdminDashboardHome/AdminDashboardHome';
import BookedAppointment from '../BookedAppointment/BookedAppointment';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());
    // console.log('object');
    const { admin } = useAuth();
    return (
        <>
            {
                admin && <AdminDashboardHome />
            }
            {
                !admin && <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={4} sm={8}>
                            <Calendar date={date} setDate={setDate}></Calendar>
                        </Grid>
                        <Grid item xs={12} md={8} sm={8}>
                            <BookedAppointment date={date}></BookedAppointment>
                        </Grid>
                    </Grid>
                </Box>
            }

        </>

    );
};

export default DashboardHome;