//single card design
import {
    Avatar,
    Button,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Chip,
    Grid,
    Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Blog = ({ blog, index }) => {
    const { tag, title, description, author, date, authorPic, blogPic } = blog;
    return (
        <Grid item xs={12} sm={12} md={6} lg={4}>
            <Card
                sx={{
                    maxWidth: 345,
                    height: 450,
                    boxShadow: 4,
                }}>
                <CardHeader
                    avatar={
                        <Avatar
                            alt={author}
                            src={`data:image/png;base64,${authorPic}`}
                        />
                    }
                    title={author}
                    subheader={date}></CardHeader>
                <CardMedia
                    component="img"
                    height="150"
                    image={`data:image/png;base64,${blogPic}`}
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
                    />

                    <Typography
                        gutterBottom
                        variant="h5"
                        sx={{ color: "#4c5885" }}>
                        {title.slice(0, 50)}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#414042" }}>
                        {description.slice(0, 100)}
                    </Typography>
                </CardContent>

                <div align="center">
                    <Link
                        style={{ textDecoration: "none" }}
                        to={`/blogfeed/${index}`}>
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
                    </Link>
                </div>
            </Card>
        </Grid>
    );
};

export default Blog;
