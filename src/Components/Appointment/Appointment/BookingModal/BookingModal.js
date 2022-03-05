import React, { useState } from "react";
import {
    Box,
    Button,
    Fade,
    FormControl,
    InputLabel,
    MenuItem,
    Modal,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import useAuth from "../../../../hooks/useAuth";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
};
const BookingModal = ({
    firstName,
    date,
    booking,
    openBooking,
    handleBookingClose,
    setBookingSuccess,
}) => {
    const { user } = useAuth();
    const [time, setTime] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const [setBookingInfo] = useState({});
    const initialInfo = {
        name: user.displayName,
        email: user.email,
        phone: "",
    };
    // console.log(initialInfo);
    const handleChange = (e) => {
        const value = e.target.value;
        setError({ phone: "" });
        setPhone(value);
        let reg = new RegExp(/^(?:\+88|88)?(01[3-9]\d{8})$/).test(value);
        if (!reg) {
            setError({ phone: "Input a valid Phone Number" });
        }
    };

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...initialInfo, status: "Pending" };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    };
    const handleOnChange = (e) => {
        setTime(e.target.value);
    };
    const hadleBookSubmit = (e) => {
        const appointment = {
            ...initialInfo,
            doctorName: firstName,
            date: date.toDateString(),
            phone: phone,
            time: time,
            status: "pending",
        };
        // console.log(appointment);
        fetch("http://localhost:5000/appointments", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(appointment),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    setBookingSuccess(true);
                    handleBookingClose();
                }
            });
        // alert("Submitting");
        // collecting data form user and saving it to the database
        e.preventDefault();
    };

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
            }}>
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography
                        align="center"
                        id="transition-modal-title"
                        variant="h6"
                        sx={{ fontSize: "16px" }}
                        component="h2">
                        Booking Appointment of {firstName}
                    </Typography>
                    <form onSubmit={hadleBookSubmit}>
                        <FormControl sx={{ width: "90%", m: 1 }}>
                            <InputLabel id="demo-simple-select-label">
                                Time
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={time}
                                label="Time"
                                onChange={handleOnChange}>
                                <MenuItem value={"10:00 AM-1:00 PM"}>
                                    10:00 AM-1:00 PM
                                </MenuItem>
                                <MenuItem value={"1:00 PM-2.00 PM"}>
                                    1:00 PM-2.00 PM
                                </MenuItem>
                                <MenuItem value={"5.00 PM-7.00 PM"}>
                                    5.00 PM-7.00 PM
                                </MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            sx={{ width: "90%", m: 1 }}
                            id="outlined-size-small"
                            name="name"
                            onBlur={handleOnBlur}
                            required
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField
                            sx={{ width: "90%", m: 1 }}
                            id="outlined-size-small"
                            name="email"
                            required
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField
                            sx={{ width: "90%", m: 1 }}
                            id="outlined-size-small"
                            name="phone"
                            value={phone}
                            required
                            label="Phone Number"
                            onChange={handleChange}
                            error={Boolean(error?.phone)}
                            helperText={error?.phone}
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: "90%", m: 1 }}
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size="small"
                            required
                        />
                        <Button type="submit" variant="contained">
                            Submit
                        </Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;
