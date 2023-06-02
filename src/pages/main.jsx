import { useEffect, useState } from "react";

import { Box, Paper, Typography } from "@mui/material";

import ShopCard from "../components/shop-card";
import Shoplist from "../components/shop-list";


export default function Main({ addGoodInCart, selectShop, shops, goods }) {
    const [filteredGoods, setFilteredGoods] = useState(goods);
    const handleFilterGoods = (shop) => {
        setFilteredGoods(
            goods.filter(good => good.shop === shop)
        )
    }

    useEffect(() => {
        setFilteredGoods(goods);
    }, [goods])

    return (
        <Box
            mt={2}
            display="grid"
            height="100%"
            gridTemplateColumns="repeat(12, 1fr)"
            gap="24px"
        >
            <Box sx={{ gridColumn: { xs: "span 12", md: "span 3" } }}>
                <Paper elevation={5}>
                    <Typography
                        p={1}
                        variant="h6"
                        textAlign="center"
                    >
                        Shops:
                    </Typography>
                    <Shoplist
                        shops={shops}
                        goods={goods}
                        handleFilterGoods={handleFilterGoods}
                        setFilteredGoods={setFilteredGoods}
                        selectShop={selectShop}
                    />
                </Paper >
            </Box>
            <Box sx={{
                gridColumn: { xs: "span 12", md: "span 9" },
                height: "100%"
            }}>
                <Paper elevation={5} sx={{
                    height: { md: "calc(100vh - 80px)" },
                    overflow: "hidden",
                }}>
                    <Box
                        height="100%"
                        display="flex"
                        alignContent="flex-start"
                        flexWrap="wrap"
                        gap={2}
                        p={2}
                        boxSizing="border-box"
                        sx={{
                            overflowY: "auto"
                        }}
                    >
                        {filteredGoods.map(good =>
                            <ShopCard
                                addGoodInCart={addGoodInCart}
                                good={good}
                                shop={good.shop}
                                key={good.id} />)}
                    </Box>
                </Paper >
            </Box>
        </Box >
    )
}