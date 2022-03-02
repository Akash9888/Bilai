import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2/dist/sweetalert2.js'



const SendMail = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_0mtrrxk",
                "template_nim2apu",
                form.current,
                "ZScBD1G2tn7gqtzvs"
            )
            .then(
                (result) => {
                    Swal.fire(
                        'Thank You!',
                        'Message Send Successfully!',
                        'success'
                    )
                    e.target.reset();
                },
                (error) => {
                    // console.log(error.text);
                }
            );

    };
    return (
        <Container sx={{ backgroundColor: "#99cef7", p: 2, borderRadius: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={0} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ textAlign: "center" }}>
                        <Typography variant="h4">Contact Us</Typography>
                        <Typography variant="body2">
                            Feel free to contact us if you need any assistance,
                            any help or another question.
                        </Typography>
                    </Box>
                    <form ref={form} onSubmit={sendEmail}>
                        <TextField
                            id="name"
                            label="Name"
                            name="user_name"
                            fullWidth
                            variant="outlined"
                            sx={{ mt: 1 }}
                        />
                        <TextField
                            id="email"
                            label="Email"
                            name="user_email"
                            fullWidth
                            variant="outlined"
                            sx={{ mt: 1 }}
                        />
                        <TextField
                            id="message"
                            label="Message"
                            name="message"
                            multiline
                            rows={4}
                            fullWidth
                            variant="outlined"
                            sx={{ mt: 1 }}
                        />
                        <Box sx={{ textAlign: "center", m: 1 }}>
                            <Button
                                variant="outlined"
                                type="submit"
                                value="Send">
                                Send
                            </Button>

                        </Box>
                    </form>
                </Grid>
                <Grid item xs={0} md={3}></Grid>
            </Grid>
        </Container>
    );
};

export default SendMail;
