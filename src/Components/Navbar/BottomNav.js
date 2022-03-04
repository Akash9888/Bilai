import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
// import image1 from "../photos/search.png";
import Badge from "@mui/material/Badge";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { CardMedia } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const ResponsiveAppBar = (props) => {
    const { user, logout } = useAuth();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const { cart } = props;

    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const menuId = "primary-search-account-menu";
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}>
            <Box>
                <Link to="userProfile" style={{ textDecoration: 'none', color: 'black' }}>
                    <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                </Link>
            </Box>
        </Menu>
    );

    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "bottom",
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}>
            <MenuItem>
                <IconButton
                    size="large"
                    component={Link}
                    to="orderReview"
                    aria-label="show 4 new carts"
                    color="primary">
                    <Badge badgeContent={totalQuantity} color="error">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
                <p>cart</p>
            </MenuItem>

            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit">
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );
    return (
        <Box>
            <AppBar position="static">
                <Toolbar
                    sx={{ backgroundColor: "#1c6bb9", color: "white" }}
                    disableGutters>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit">
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ ml: 8 }}>
                        <CardMedia
                            component="img"
                            height="50"
                            sx={{ p: 1 }}
                            image="https://i.ibb.co/HFQPY4L/cat.png"
                            alt="Bilai | A True Compainion"
                        />
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: "none", sm: "none" } }}>
                        BILAI
                    </Typography>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: "block", md: "none" },
                        }}>
                        <MenuItem
                            component={Link}
                            onClick={handleCloseNavMenu}
                            // the 'to' prop (and any other props not recognized by MenuItem itself)
                            // will be passed down to the Link component
                            to="/">
                            home
                        </MenuItem>
                        <MenuItem
                            component={Link}
                            onClick={handleCloseNavMenu}
                            // the 'to' prop (and any other props not recognized by MenuItem itself)
                            // will be passed down to the Link component

                            to="shop">
                            Shop
                        </MenuItem>

                        <MenuItem
                            component={Link}
                            onClick={handleCloseNavMenu}
                            // the 'to' prop (and any other props not recognized by MenuItem itself)
                            // will be passed down to the Link component
                            to="Doctor">
                            Doctors
                        </MenuItem>
                        <MenuItem
                            component={Link}
                            onClick={handleCloseNavMenu}
                            // the 'to' prop (and any other props not recognized by MenuItem itself)
                            // will be passed down to the Link component
                            to="blogfeed">
                            Blog
                        </MenuItem>
                        <MenuItem
                            component={Link}
                            onClick={handleCloseNavMenu}
                            to="/adoption">
                            Adoptions
                        </MenuItem>
                        <MenuItem
                            component={Link}
                            onClick={handleCloseNavMenu}
                            // the 'to' prop (and any other props not recognized by MenuItem itself)
                            // will be passed down to the Link component
                            to="/daycare">
                            Daycare
                        </MenuItem>
                    </Menu>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                            ml: 15,
                        }}>
                        <nav>
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        color: "white",
                                        display: "block",
                                        textDecoration: "none",
                                        fontSize: "16px",
                                        mr: 5,
                                    }}>
                                    Home
                                </Button>
                            </Link>
                        </nav>
                        <nav>
                            <Link to="shop" style={{ textDecoration: "none" }}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        color: "white",
                                        display: "block",
                                        textDecoration: "none",
                                        fontSize: "16px",
                                        mr: 5,
                                    }}>
                                    Shop
                                </Button>
                            </Link>
                        </nav>

                        <nav>
                            <Link
                                to="doctor"
                                style={{ textDecoration: "none" }}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        // my: 2,
                                        color: "white",
                                        display: "block",
                                        //mr: 5,
                                        fontSize: "16px",
                                        textDecoration: "none",
                                        mr: 5,
                                    }}>
                                    Doctors
                                </Button>
                            </Link>
                        </nav>
                        <nav>
                            <Link
                                to="blogfeed"
                                style={{ textDecoration: "none" }}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        color: "white",
                                        display: "block",
                                        mr: 5,
                                        fontSize: "16px",
                                    }}>
                                    Blog
                                </Button>
                            </Link>
                        </nav>
                        <nav>
                            <Link
                                to="adaptions"
                                style={{ textDecoration: "none" }}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        // my: 2,
                                        color: "white",
                                        display: "block",
                                        fontSize: "16px",
                                        mr: 5,
                                        //mr: 5,
                                    }}>
                                    Adaptions
                                </Button>
                            </Link>
                        </nav>

                        <nav>
                            <Link
                                to="daycare"
                                style={{ textDecoration: "none" }}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        // my: 2,
                                        color: "white",
                                        display: "block",
                                        textDecoration: "none",
                                        fontSize: "16px",
                                        mr: 5,
                                    }}>
                                    Day Care
                                </Button>
                            </Link>
                        </nav>
                        {user?.emailVerified === true && (
                            <nav>
                                <Link
                                    to="dashboard"
                                    style={{ textDecoration: "none" }}>
                                    <Button
                                        onClick={handleCloseNavMenu}
                                        sx={{
                                            // my: 2,
                                            color: "white",
                                            display: "block",
                                            textDecoration: "none",
                                            fontSize: "16px",
                                            mr: 5,
                                        }}>
                                        Dashboard{" "}
                                    </Button>
                                </Link>
                            </nav>
                        )}

                        {user?.emailVerified === true ? (
                            <Button
                                onClick={() => {
                                    handleCloseNavMenu();
                                    logout();
                                }}
                                sx={{
                                    color: "white",
                                    display: "block",
                                    textDecoration: "none",
                                    fontSize: "16px",
                                    mr: 5,
                                }}>
                                Logout{" "}
                            </Button>
                        ) : (
                            <nav>
                                <Link
                                    to="login"
                                    style={{ textDecoration: "none" }}>
                                    <Button
                                        onClick={handleCloseNavMenu}
                                        sx={{
                                            // my: 2,
                                            color: "white",
                                            display: "block",
                                            textDecoration: "none",
                                            fontSize: "16px",
                                            mr: 5,
                                        }}>
                                        Login{" "}
                                    </Button>
                                </Link>
                            </nav>
                        )}
                        {!user?.email && (
                            <nav>
                                <Link
                                    to="register"
                                    style={{ textDecoration: "none" }}>
                                    <Button
                                        onClick={handleCloseNavMenu}
                                        sx={{
                                            // my: 2,
                                            color: "white",
                                            display: "block",
                                            textDecoration: "none",
                                            fontSize: "16px",
                                            mr: 5,
                                        }}>
                                        Register{" "}
                                    </Button>
                                </Link>
                            </nav>
                        )}
                    </Box>

                    <Box sx={{ mr: 5 }}>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: "none", md: "flex" } }}>
                            <IconButton
                                size="large"
                                component={Link}
                                to="orderReview"
                                aria-label="show 4 new carts"
                                color="inherit">
                                <Badge
                                    badgeContent={totalQuantity}
                                    color="error">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>

                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit">
                                {
                                    !user?.email && <AccountCircleIcon />
                                }

                                {
                                    user?.email && <CardMedia
                                        component="img"
                                        height="40"
                                        sx={{ borderRadius: "50%" }}
                                        image={user?.photoURL}
                                        alt=":"
                                    />
                                }

                            </IconButton>

                        </Box>
                        <Box sx={{ display: { xs: "flex", md: "none" } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit">
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Toolbar>
                {/* </Container> */}
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
};
export default ResponsiveAppBar;
