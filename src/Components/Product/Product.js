import React, { useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogTitle, IconButton, Rating, Slide, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const styles = theme => ({
    root: {
        minWidth: 275,
        height: '405px',
        [theme.breakpoints.down('md')]: {
            height: '450px',
        },
    },
});
const Product = ({ product, handleAddToCart }) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Card styles={styles}>
            <CardMedia
                component="img"
                alt={product.name}
                height="200"
                sx={{ objectFit: 'cover', mt: 1 }}
                image={product.img}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {product.name}
                </Typography>
                <Typography gutterBottom variant="h6" color="text.secondary" component="div">
                    &#2547; {product.price}
                </Typography>
                {/* <Typography variant="subtitle1" gutterBottom component="div">
                    Only {product.stock} left in the Stock
                </Typography> */}
            </CardContent>
            <CardActions disableSpacing sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Button onClick={handleOpen}>
                    <IconButton aria-label="Showing Details" >
                        <VisibilityIcon />
                    </IconButton>
                </Button>
                <IconButton aria-label="Add to Cart" onClick={() => handleAddToCart(product)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {product.name}
                    </Typography>
                    <Typography dangerouslySetInnerHTML={{ __html: product.description }} id="modal-modal-description" color="textSecondary" variant="body2" sx={{ mt: 2 }}>
                    </Typography>
                    <Typography sx={{ mt: 2 }} id="modal-modal-title" color="textSecondary" variant="subtitle1" component="h2">
                        Only {product.stock} items in Stock-Order Soon
                    </Typography>
                    <Rating sx={{ mt: 2 }} name="read-only" value={product.star} readOnly />
                </DialogTitle>
                <DialogActions>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box>
                            <IconButton aria-label="Add to Cart" onClick={() => handleAddToCart(product)} color="primary">
                                <AddShoppingCart />
                            </IconButton>
                        </Box>
                    </Box>
                </DialogActions>
            </Dialog>
        </Card>
    );
};

export default Product;