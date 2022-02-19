<<<<<<< HEAD
import React, { useState } from "react";
import {
    Box,
    Button,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
    Modal,
    Paper,
    Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import ButtonGroup from "@mui/material/ButtonGroup";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: `calc(100vw - 200pxpx)`,
    bgcolor: "background.paper",
    border: "2px solid #eee",
    borderRadius: 1,
    pt: 2,
    px: 4,
    pb: 3,
};
=======
import React, { useState } from 'react';
import { Box, Button, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogTitle, IconButton, Paper, Slide, Typography, } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import ButtonGroup from '@mui/material/ButtonGroup';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

>>>>>>> ab578e10c1bbed51548ed0ec9fa1977015e28c1a

const Product = ({ product, onAddToCart }) => {
    const [open, setOpen] = useState(false);
    const [counter, setCounter] = useState(0);
    const handleOpen = () => {
        setOpen(true);
    };
    // console.log(product.length);
    const handleClose = () => {
        setOpen(false);
    };

    return (
<<<<<<< HEAD
        <Paper elevation={3} sx={{ maxWidth: "90%" }}>
=======

        <Paper elevation={3} sx={{ maxWidth: '100%' }}>
>>>>>>> ab578e10c1bbed51548ed0ec9fa1977015e28c1a
            <CardMedia
                component="img"
                alt={product.name}
                height="200"
                sx={{ objectFit: "cover", mt: 1 }}
                image={product.image.url}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {product.name}
                </Typography>
                <Typography
                    gutterBottom
                    variant="h6"
                    color="text.secondary"
                    component="div">
                    {product.price.formatted_with_symbol}
                </Typography>
            </CardContent>
            <CardActions
                disableSpacing
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}>
                <Button onClick={handleOpen}>
                    <IconButton aria-label="Showing Details">
                        <VisibilityIcon />
                    </IconButton>
                </Button>
<<<<<<< HEAD
                <IconButton
                    aria-label="Add to Cart"
                    onClick={() => onAddToCart(product.id, 1)}>
=======
                <IconButton aria-label="Add to Cart" onClick={() => {
                    onAddToCart(product.id, 1);

                }}>
>>>>>>> ab578e10c1bbed51548ed0ec9fa1977015e28c1a
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
<<<<<<< HEAD
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2">
                        {product.name}
                    </Typography>
                    <Typography
                        dangerouslySetInnerHTML={{
                            __html: product.description,
                        }}
                        id="modal-modal-description"
                        color="textSecondary"
                        variant="body2"
                        sx={{ mt: 2 }}></Typography>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}>
=======
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {product.name}
                    </Typography>
                    <Typography dangerouslySetInnerHTML={{ __html: product.description }} id="modal-modal-description" color="textSecondary" variant="body2" sx={{ mt: 2 }}>
                    </Typography>
                </DialogTitle>
                <DialogActions>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
>>>>>>> ab578e10c1bbed51548ed0ec9fa1977015e28c1a
                        <Box>
                            <ButtonGroup
                                variant="contained"
                                aria-label="small outlined button group">
                                {
                                    <Button
                                        disabled={counter <= 0}
                                        onClick={() => {
                                            setCounter(counter - 1);
                                        }}>
                                        -
                                    </Button>
                                }
                                {<Button disabled>{counter}</Button>}
                                <Button
                                    disabled={
                                        counter >= product["countInStock"]
                                    }
                                    onClick={() => {
                                        setCounter(counter + 1);
                                    }}>
                                    +
                                </Button>
                            </ButtonGroup>
                        </Box>
<<<<<<< HEAD
                        <IconButton
                            aria-label="Add to Cart"
                            color="primary"
                            onClick={() => onAddToCart(product.id, counter)}>
                            <AddShoppingCart />
                        </IconButton>
=======
                        <Box>
                            <IconButton aria-label="Add to Cart" color="primary" onClick={() => onAddToCart(product.id, counter)}>
                                <AddShoppingCart />
                            </IconButton>
                        </Box>
>>>>>>> ab578e10c1bbed51548ed0ec9fa1977015e28c1a
                    </Box>
                </DialogActions>
            </Dialog>
        </Paper>
    );
};

export default Product;
