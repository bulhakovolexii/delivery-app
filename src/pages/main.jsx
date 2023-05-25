import {
    Avatar,
    Box,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Paper,
    Typography
} from "@mui/material";
import ShopCard from "../components/global/shop-card";
import { shops } from "../data"

function Shop({ shop }) {
    return (
        <ListItem>
            <ListItemButton>
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

export default function Main() {
    return (
        <Box
            mt={2}
            display="grid"
            height="100%"
            gridTemplateColumns="repeat(12, 1fr)"
            gap="24px"
        >
            <Box sx={{ gridColumn: "span 3" }}>
                <Paper elevation={5}>
                    <Typography
                        p={1}
                        variant="h6"
                        textAlign="center"
                    >
                        Shops:
                    </Typography>
                    <List dense>
                        {shops.map(shop => <Shop shop={shop} key={shop.name} />)}
                    </List>
                </Paper >
            </Box>
            <Box sx={{
                gridColumn: "span 9",
                height: "100%"
            }}>
                <Paper elevation={5} sx={{
                    height: "calc(100vh - 80px)",
                    overflow: "hidden",
                }}>
                    <Box
                        height="100%"
                        display="flex"
                        flexWrap="wrap"
                        gap={2}
                        p={2}
                        boxSizing="border-box"
                        sx={{
                            overflowY: "auto"
                        }}
                    >
                        {shops[0].goods.map(good => <ShopCard good={good} shop={shops[0].name} key={good.name} />)}
                    </Box>
                </Paper >
            </Box>
        </Box >
    )
}