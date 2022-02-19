
import { Button, CardActions, CardContent, CardMedia, Paper, Typography, } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const CartItem = ({ item, handleEmptyCart, handleUpdateQuantity, handleRemoveFromCart }) => {
    return (
        <Paper elevation={3} sx={{ maxWidth: 345, p: 1 }}>
            <CardMedia
                component="img"
                height="260"
                image={item.image.url}
                alt={item.name}
            />
            <CardContent>
                <Typography variant="body2" color="text.primary">
                    {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.line_total.formatted_with_symbol}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between' }} disableSpacing>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button type='button' size="small" onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</Button>
                </Box>
                <Button onClick={() => handleRemoveFromCart(item.id)} variant="contained" type="button" color="secondary">Remove</Button>
            </CardActions>
        </Paper>
    );
};

export default CartItem;