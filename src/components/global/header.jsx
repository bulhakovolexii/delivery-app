import { AppBar, IconButton, Tab, Tabs, Toolbar, Typography } from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <AppBar>
            <Toolbar
                variant="dense"
            >
                <Typography
                    variant="h6"
                    noWrap
                    pr={2}
                    sx={{ display: "inline" }}
                >
                    Delivery app
                </Typography>
                <Tabs
                    sx={{ flexGrow: 1 }}
                    value={value}
                    onChange={handleChange}
                    textColor="inherit"
                    indicatorColor="secondary"
                >
                    <Tab
                        sx={{ minHeight: "inherit" }}
                        icon={<MenuIcon />}
                        label="Shop"
                        iconPosition="start"
                        index={0}
                        component={Link}
                        to={"/delivery-app/"}
                    />
                    <Tab
                        sx={{ minHeight: "inherit" }}
                        icon={<ShoppingCartIcon />}
                        label="Shopping Cart"
                        iconPosition="start"
                        index={1}
                        component={Link}
                        to={"/delivery-app/cart"}
                    />
                </Tabs>
                <IconButton
                    size="medium"
                    color="inherit"
                >
                    <SearchIcon />
                </IconButton>
            </Toolbar>
        </AppBar >
    )
}