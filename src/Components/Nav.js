import { Search } from "@mui/icons-material";
import { alpha, AppBar, InputBase, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
    toolBar: {
        display: "flex",
        justifyContent: "space-between",
    },
}));

function Nav() {
    const classes = useStyles();
    return (
        <AppBar>
            <Toolbar className={classes.toolBar}>
                <Typography
                    variant="h6"
                    sx={{ display: { xs: "block", md: "none" } }}>
                    MUI
                </Typography>
                <Typography
                    variant="h6"
                    sx={{ display: { xs: "none", md: "block" } }}>
                    MUI-VERSE
                </Typography>

                <div>
                    <Search />
                    <InputBase placeholder="Search.." />
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Nav;
