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

export default function MediaCard(props) {
    console.log("77777 :" + props.blog);
    const {
        id,
        catagory,
        tag,
        language,
        title,
        description,
        author,
        date,
        authorPic,
        blogPic,
    } = props.blog;
    console.log(author);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={<Avatar alt={author} src={authorPic} />}
                        title={author}
                        subheader={date}></CardHeader>
                    <CardMedia
                        component="img"
                        height="150"
                        image={blogPic}
                        alt="author"
                    />
                    <CardContent>
                        <Chip
                            label={tag}
                            variant="outlined"
                            size="small"
                            sx={{
                                backgroundColor: "#56CCF2",
                                color: "#FFFFFF",
                            }}
                            // onClick={handleClick}
                        />
                        <Chip
                            label="Pet"
                            variant="outlined"
                            size="small"
                            sx={{
                                marginLeft: "5px",
                                backgroundColor: "#56CCF2",
                                color: "#FFFFFF",
                            }}
                            // onClick={handleClick}
                        />
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>

                    <div align="center">
                        <Button
                            variant="outlined"
                            size="small"
                            sx={{
                                width: "50%",
                                borderRadius: "5px",
                                marginBottom: "10px",
                            }}>
                            Continue reading..
                        </Button>
                    </div>
                </Card>
            </Grid>
        </>
    );
}
