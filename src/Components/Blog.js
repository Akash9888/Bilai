import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Avatar, Badge, Box, CardHeader, Chip, Container } from "@mui/material";
import { red } from "@mui/material/colors";
import Grid from "@mui/material/Grid";

export default function MediaCard() {
    return (
        <Container sx={{ mt: 3 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 355 }}>
                            <CardHeader
                                avatar={
                                    <Avatar
                                        sx={{ bgcolor: red[500] }}
                                        aria-label="recipe">
                                        R
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"></CardHeader>
                            <CardMedia
                                component="img"
                                height="150"
                                image="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div">
                                    Lizard
                                    <Chip size="small" label="Chip Filled" />
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary">
                                    Lizards are a widespread group of squamate
                                    reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton aria-label="add to favorites">
                                    <Badge badgeContent={4} color="success">
                                        <FavoriteIcon color="action" />
                                    </Badge>
                                </IconButton>
                                <IconButton aria-label="share">
                                    <Badge badgeContent={4} color="success">
                                        <ShareIcon color="action" />
                                    </Badge>
                                </IconButton>
                                <Button size="small">Continue Reading</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 355 }}>
                            <CardHeader
                                avatar={
                                    <Avatar
                                        sx={{ bgcolor: red[500] }}
                                        aria-label="recipe">
                                        R
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"></CardHeader>
                            <CardMedia
                                component="img"
                                height="150"
                                image="https://images.pexels.com/photos/33152/european-rabbits-bunnies-grass-wildlife.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div">
                                    Lizard
                                    <Chip size="small" label="Chip Filled" />
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary">
                                    Lizards are a widespread group of squamate
                                    reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton aria-label="add to favorites">
                                    <Badge badgeContent={4} color="success">
                                        <FavoriteIcon color="action" />
                                    </Badge>
                                </IconButton>
                                <IconButton aria-label="share">
                                    <Badge badgeContent={4} color="success">
                                        <ShareIcon color="action" />
                                    </Badge>
                                </IconButton>
                                <Button size="small">Continue Reading</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 355 }}>
                            <CardHeader
                                avatar={
                                    <Avatar
                                        sx={{ bgcolor: red[500] }}
                                        aria-label="recipe">
                                        R
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"></CardHeader>
                            <CardMedia
                                component="img"
                                height="150"
                                image="https://images.pexels.com/photos/1378849/pexels-photo-1378849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div">
                                    Lizard
                                    <Chip size="small" label="Chip Filled" />
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary">
                                    Lizards are a widespread group of squamate
                                    reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton aria-label="add to favorites">
                                    <Badge badgeContent={4} color="success">
                                        <FavoriteIcon color="action" />
                                    </Badge>
                                </IconButton>
                                <IconButton aria-label="share">
                                    <Badge badgeContent={4} color="success">
                                        <ShareIcon color="action" />
                                    </Badge>
                                </IconButton>
                                <Button size="small">Continue Reading</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
