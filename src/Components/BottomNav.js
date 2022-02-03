import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import image1 from "../photos/search.png";
// import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";

import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";

const pages = [
    "Home",
    "Toys",
    "Medicine",
    "Doctors",
    "Blog",
    "Adoption",
    "Day Care",
];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
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
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            <MenuItem onClick={handleMenuClose}>Dashboard</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
    );

    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 4 new carts"
                    color="inherit">
                    <Badge badgeContent={4} color="error">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
                <p>cart</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit">
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
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
                {/* <Container> */}
                <Toolbar
                    sx={{ backgroundColor: "#394366", color: "white" }}
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
                    <Box>
                        <Avatar
                            sx={{
                                display: {
                                    xs: "none",
                                    sm: "none",
                                    md: "block",
                                    lg: "block",
                                    xl: "block",
                                    ml: 2,
                                },
                            }}
                            src={image1}
                            alt="Remy Sharp"
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
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    {page}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Menu>

                    {/* <Box
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
                    </Box> */}
                    {/* <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}>
                        LOGO
                    </Typography> */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                            ml: 2,
                        }}>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{
                                // my: 2,
                                color: "white",
                                display: "block",
                                // mr: 2,
                            }}>
                            Home
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{
                                // my: 2,
                                color: "white",
                                display: "block",
                                // mr: 2,
                            }}>
                            Shop
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{
                                // my: 2,
                                color: "white",
                                display: "block",
                                // mr: 2,
                            }}>
                            Medicine
                        </Button>
                        <nav>
                            <Link to="doctor">
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        // my: 2,
                                        color: "white",
                                        display: "block",
                                        // mr: 2,
                                    }}>
                                    Doctors
                                </Button>
                            </Link>
                        </nav>
                        <nav>
                            <Link to="blogfeed">
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        // my: 2,
                                        color: "white",
                                        display: "block",
                                        // mr: 2,
                                    }}>
                                    Blog
                                </Button>
                            </Link>
                        </nav>

                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{
                                // my: 2,
                                color: "white",
                                display: "block",
                                // mr: 2,
                            }}>
                            Adaptions
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{
                                // my: 2,
                                color: "white",
                                display: "block",
                                // mr: 2,
                            }}>
                            Day Care
                        </Button>
                        {/* {pages.map((page) => (
                            
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    // my: 2,
                                    color: "white",
                                    display: "block",
                                    // mr: 2,
                                }}>
                                {page}
                            </Button>
                        ))} */}
                    </Box>

                    <Box sx={{ mr: 2 }}>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: "none", md: "flex" } }}>
                            <IconButton
                                size="large"
                                aria-label="show 4 new carts"
                                color="inherit">
                                <Badge badgeContent={4} color="error">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit">
                                <Badge badgeContent={17} color="error">
                                    <NotificationsIcon />
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
                                <AccountCircle />
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
