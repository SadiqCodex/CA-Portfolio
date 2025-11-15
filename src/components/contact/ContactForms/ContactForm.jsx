import React from "react";
import "./ContactForm.scss";

import {
    Box,
    TextField,
    Button,
    Grid,
    Paper,
    Typography,
    InputAdornment,
} from "@mui/material";

import {
    Person as PersonIcon,
    Email as EmailIcon,
    Phone as PhoneIcon,
    Message as MessageIcon,
} from "@mui/icons-material";

const ContactForms = () => {
    return (
        <section className="contact-form-section">
            <div className="container">

                <Paper elevation={10} className="form-card">

                    <Typography variant="h4" className="form-title">
                        Send Us a Message
                    </Typography>

                    <Typography className="form-subtitle">
                        We'd love to hear from you. Fill out the form and our team will get back to you shortly.
                    </Typography>

                    <Box component="form" className="form-box">
                        <Grid container spacing={3}>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Your Name"
                                    fullWidth
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PersonIcon className="input-icon" />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Email Address"
                                    fullWidth
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <EmailIcon className="input-icon" />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Phone Number"
                                    fullWidth
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PhoneIcon className="input-icon" />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    label="Your Message"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment
                                                position="start"
                                                sx={{ marginBottom: "auto", paddingTop: "12px" }}
                                            >
                                                <MessageIcon className="input-icon" />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    className="submit-btn"
                                    fullWidth
                                >
                                    Send Message
                                </Button>
                            </Grid>

                        </Grid>
                    </Box>

                </Paper>

            </div>
        </section>
    );
};

export default ContactForms;
