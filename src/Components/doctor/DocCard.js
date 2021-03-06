import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Grid from "@mui/material/Grid";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import BookingModal from "../Appointment/Appointment/BookingModal/BookingModal";
import { Link } from "react-router-dom";

const DocCard = (props) => {
    const { name, address, specialisation, imgUrl } = props.doc;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Card variant="outlined" sx={{ maxWidth: 355, p: 2 }}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center">
                        <Avatar
                            sx={{ width: 100, height: 100 }}
                            alt="Remy Sharp"
                            src={`data:image/png;base64,${imgUrl}`}
                        />
                    </Box>
                    <Box textAlign="center">
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div">
                                {name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {specialisation}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <IconButton>
                                    <LocationOnIcon />
                                </IconButton>
                                {address}
                            </Typography>
                        </CardContent>
                        <Box sx={{ mb: 2 }}>
                            <Link
                                style={{ textDecoration: "none" }}
                                to={`/doctorProfile/${props.index}`}>
                                <Button
                                    size="small"
                                    variant="contained"
                                    endIcon={<PermIdentityIcon />}>
                                    View Profile
                                </Button>
                            </Link>
                            <Button
                                sx={{
                                    marginLeft: 2,
                                }}
                                variant="contained"
                                onClick={handleBookingOpen}
                                size="small"
                                endIcon={<BookmarksOutlinedIcon />}>
                                Appointment
                            </Button>
                        </Box>
                    </Box>
                </Card>
            </Grid>
            <BookingModal
                date={props.date}
                booking={props.doc}
                openBooking={openBooking}
                firstName={name}
                handleBookingClose={handleBookingClose}
                setBookingSuccess={props.setBookingSuccess}></BookingModal>
        </>
    );
};

export default DocCard;
