import React, { useState } from 'react';
import { Box, Button, CardActions, CardContent, CardMedia, IconButton, Modal, Paper, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import ButtonGroup from '@mui/material/ButtonGroup';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: `calc(100vw - 200pxpx)`,
    bgcolor: 'background.paper',
    border: '2px solid #eee',
    borderRadius: 1,
    pt: 2,
    px: 4,
    pb: 3,
};

const Product = ({ product, onAddToCart }) => {
    const [open, setOpen] = useState(false);
    const [counter, setCounter] = useState(0);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Paper elevation={3} sx={{ maxWidth: '100%' }}>
            <CardMedia
                component="img"
                alt={product.name}
                height="200"
                sx={{ objectFit: 'cover', mt: 1 }}
                image={product.image.url}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {product.name}
                </Typography>
                <Typography gutterBottom variant="h6" color="text.secondary" component="div">
                    {product.price.formatted_with_symbol}
                </Typography>
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
                <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {product.name}
                    </Typography>
                    <Typography dangerouslySetInnerHTML={{ __html: product.description }} id="modal-modal-description" color="textSecondary" variant="body2" sx={{ mt: 2 }}>
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box>
                            <ButtonGroup
                                variant="contained" aria-label="small outlined button group">
                                {<Button disabled={counter <= 0} onClick={() => {
                                    setCounter(counter - 1)
                                }}>-</Button>}
                                {<Button disabled>{counter}</Button>}
                                <Button disabled={counter >= product['countInStock']} onClick={() => { setCounter(counter + 1) }}>+</Button>
                            </ButtonGroup>
                        </Box>
                        <IconButton aria-label="Add to Cart" color="primary" onClick={() => onAddToCart(product.id, counter)}>
                            <AddShoppingCart />
                        </IconButton>
                    </Box>
                </Box>
            </Modal>
        </Paper>
    );
};

export default Product;