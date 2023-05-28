import {
    Box,
    Paper,
} from "@mui/material";

import CartCard from "../components/cart-card";
import OrderForm from "../components/order-form";

export default function Cart({ cart, removeGoodFromCart, setPiecesOfGood, postOrder, setCart }) {
    return (
        < Box
            mt={2}
            display="grid"
            height="100%"
            gridTemplateColumns="repeat(12, 1fr)"
            gap="24px"
        >
            <Box sx={{
                gridColumn: { xs: "span 12", md: "span 6" },
                height: "100%"
            }}>
                <Paper elevation={5} sx={{
                    height: { md: "calc(100vh - 80px)" },
                    overflow: "hidden",
                }}>
                    <Box
                        height="100%"
                        p={2}
                        boxSizing="border-box"
                        sx={{
                            overflowY: "auto",
                            display: "flex",
                            flexDirection: "column",
                            gap: 1
                        }}
                    >
                        {cart.map(good =>
                            <CartCard
                                good={good}
                                cart={cart}
                                removeGoodFromCart={removeGoodFromCart}
                                key={good.name}
                                setPiecesOfGood={setPiecesOfGood}
                            />)}
                    </Box>
                </Paper >
            </Box>
            <OrderForm
                cart={cart}
                postOrder={postOrder}
            />
        </Box >
    )
}