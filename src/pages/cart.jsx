import {
    Box,
    Paper
} from "@mui/material";

import { shops } from "../data"
import CartCard from "../components/global/cart-card";

export default function Cart() {
    return (
        <Box
            mt={2}
            display="grid"
            height="100%"
            gridTemplateColumns="repeat(12, 1fr)"
            gap="24px"
        >
            <Box sx={{
                gridColumn: "span 6",
                height: "100%"
            }}>
                <Paper elevation={5} sx={{
                    height: "calc(100vh - 80px)",
                    overflow: "hidden",
                }}>
                    <Box
                        height="100%"
                        p={2}
                        boxSizing="border-box"
                        sx={{
                            overflowY: "auto"
                        }}
                    >
                        {shops[0].goods.map(good => <CartCard good={good} key={good.name} />)}
                    </Box>
                </Paper >
            </Box>
            <Box sx={{ gridColumn: "span 6" }}>
                <Paper elevation={5}>

                </Paper >
            </Box>
        </Box >
    )
}