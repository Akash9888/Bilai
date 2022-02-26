import React, { useState } from 'react';
import { Box, Button, ButtonGroup, Card, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogTitle, IconButton, Rating, Slide, Typography } from '@mui/material';
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
    // console.log(product);
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
                    <Typography id="modal-modal-title" color="textSecondary" variant="subtitle1" component="h2">
                        Only {product.stock} items in Stock-Order Soon
                    </Typography>
                    <Rating name="read-only" value={product.stock} readOnly />
                </DialogTitle>
                <DialogActions>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box>
                            {/* <ButtonGroup
                                variant="contained" aria-label="small outlined button group">
                                {<Button disabled={counter <= 0} onClick={() => {
                                    setCounter(counter - 1)
                                }}>-</Button>}
                                {<Button disabled>{counter}</Button>}
                                <Button disabled={counter >= product['countInStock']} onClick={() => { setCounter(counter + 1) }}>+</Button>
                            </ButtonGroup> */}
                        </Box>
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