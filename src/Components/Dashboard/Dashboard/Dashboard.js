import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import BookOnlineIcon from '@mui/icons-material/BookOnline';
import { Link, Outlet } from 'react-router-dom';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import useAuth from '../../../hooks/useAuth';
import AddCommentIcon from '@mui/icons-material/AddComment';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        backgroundColor: '#080e11',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function Dashboard() {
    const theme = useTheme();
    const { admin } = useAuth();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={{ color: '#080e11' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" color='white'>
                        DashBoard
                    </Typography>
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                        <ListItem button>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </Link>




                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {
                        !admin && <Box>
                            <nav>
                                <Link to="myorder" style={{ textDecoration: 'none' }}>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <BookmarkBorderIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="MY ORDER" />
                                    </ListItem>
                                </Link>
                            </nav>
                        </Box>
                    }
                    {
                        admin && <Box>
                            <nav>
                                <Link to="addDoctor" style={{ textDecoration: 'none' }}>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <AddCommentIcon color="secondary" />
                                        </ListItemIcon>
                                        <ListItemText primary="ADD DOCTOR" />
                                    </ListItem>
                                </Link>
                            </nav>
                            <nav>
                                <Link to="addProduct" style={{ textDecoration: 'none' }}>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <ProductionQuantityLimitsIcon color="secondary" />
                                        </ListItemIcon>
                                        <ListItemText primary="ADD PRODUCT" />
                                    </ListItem>
                                </Link>
                            </nav>
                            <nav>
                                <Link to="addBlog" style={{ textDecoration: 'none' }}>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <AddCommentIcon variant="outlined" color="secondary" />
                                        </ListItemIcon>
                                        <ListItemText primary="ADD BLOG" />
                                    </ListItem>
                                </Link>
                            </nav>
                            <nav>
                                <Link to="allAppointment" style={{ textDecoration: 'none' }}>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <DensitySmallIcon color="primary" />
                                        </ListItemIcon>
                                        <ListItemText primary="ALL APPOINTMENT" />
                                    </ListItem>
                                </Link>
                            </nav>
                            <nav>
                                <Link to="makeAdmin" style={{ textDecoration: 'none' }}>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <AdminPanelSettingsIcon variant="outlined" color="primary" />
                                        </ListItemIcon>
                                        <ListItemText primary="Make Admin" />
                                    </ListItem>
                                </Link>
                            </nav>
                            <nav>
                                <Link to="allUser" style={{ textDecoration: 'none' }}>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <PersonIcon variant="outlined" color="primary" />
                                        </ListItemIcon>
                                        <ListItemText primary="All USER" />
                                    </ListItem>
                                </Link>
                            </nav>
                        </Box>
                    }


                </List>

            </Drawer>
            <div className="content">

                <Outlet />
            </div>
        </Box>
    );
}