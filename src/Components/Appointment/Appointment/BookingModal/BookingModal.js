import React, { useState } from 'react';
import { Box, Button, Fade, FormControl, InputLabel, MenuItem, Modal, Select, TextField, Typography } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import useAuth from '../../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};
const BookingModal = ({ firstName, date, booking, openBooking, handleBookingClose, setBookingSuccess }) => {
    const { user } = useAuth();
    const [time, setTime] = React.useState('');

    const initialInfo = { name: user.displayName, email: user.email, phone: '', time: time };
    const [bookingInfo, setBookingInfo] = useState({})
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...initialInfo, status: 'Pending' };
        newInfo[field] = value;
        // console.log(newInfo);
        setBookingInfo(newInfo);
    }
    const hadleBookSubmit = e => {
        const appointment = {
            ...bookingInfo, doctorName: firstName, date: date.toLocaleDateString()
        };
        // console.log(appointment);
        fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true);
                    handleBookingClose();
                }
            })
        // alert("Submitting");
        // collecting data form user and saving it to the database 
        e.preventDefault();
    }

    const handleOnChange = e => {
        setTime(e.target.value);
    }
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography align='center' id="transition-modal-title" variant="h6" sx={{ fontSize: '16px' }} component="h2">
                        Booking Appointment of {firstName}
                    </Typography>
                    <form onSubmit={hadleBookSubmit}>

                        <FormControl sx={{ width: '90%', m: 1 }}>
                            <InputLabel id="demo-simple-select-label">Time</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={time}
                                label="Time"
                                onChange={handleOnChange}
                            >
                                <MenuItem value={'10:00 AM-1:00 PM'}>10:00 AM-1:00 PM</MenuItem>
                                <MenuItem value={'1:00 PM-2.00 PM'}>1:00 PM-2.00 PM</MenuItem>
                                <MenuItem value={'5.00 PM-7.00 PM'}>5.00 PM-7.00 PM</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="name"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="phone"
                            onBlur={handleOnBlur}
                            defaultValue='Phone Number'
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size="small"
                        />
                        <Button type="submit" variant="contained">Submit</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;