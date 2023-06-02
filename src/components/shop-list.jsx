import { Avatar, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material"

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

function Shop({ shop, handleFilterGoods }) {
    return (
        <ListItem>
            <ListItemButton onClick={() => handleFilterGoods(shop.name)}>
                <ListItemText
                    primary={shop.name}
                />
                <ListItemAvatar
                    sx={{ minWidth: "unset" }}
                >
                    <Avatar
                        src={shop.logo}
                    />
                </ListItemAvatar>
            </ListItemButton>
        </ListItem>
    )
}

export default function Shoplist({ shops, goods, handleFilterGoods, setFilteredGoods }) {
    return (
        <List dense>
            <ListItem>
                <ListItemButton onClick={() => setFilteredGoods(goods)}>
                    <ListItemText
                        primary="All shops"
                    />
                    <ListItemAvatar
                        sx={{ minWidth: "unset" }}
                    >
                        <Avatar>
                            <ShoppingBagIcon />
                        </Avatar>
                    </ListItemAvatar>
                </ListItemButton>
            </ListItem>
            {shops.map(shop =>
                <Shop
                    shop={shop}
                    key={shop.id}
                    handleFilterGoods={handleFilterGoods}
                />)}
        </List>
    )
}