import {
    Box,
    Button,
    Paper,
    TextField,
    Typography
} from "@mui/material";

import CartCard from "../components/global/cart-card";
import { useEffect, useState } from "react";

export default function Cart({ cart, removeGoodFromCart, setPiecesOfGood }) {
    const [sumOfCart, setSumOfCart] = useState(0);

    useEffect(() => {
        let sum = 0;
        cart.forEach((good) => { sum += good.pieces * good.price });
        setSumOfCart(sum.toFixed(2));
    }, [cart])

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
                    height: "calc(100vh - 80px)",
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
            <Box sx={{
                gridColumn: { xs: "span 12", md: "span 6" },
            }}>
                <Paper elevation={5}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        p={4}
                        gap={5}
                    >
                        <TextField label="Name:" type="text" variant="standard" />
                        <TextField label="Email:" type="email" variant="standard" />
                        <TextField label="Phone:" type="tel" variant="standard" />
                        <TextField label="Address:" type="text" variant="standard" />
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="column"
                        sx={{ padding: "16px 32px" }}
                        gap={3}
                    >
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="h5">Total price:</Typography>
                            <Typography variant="h5">{"$" + sumOfCart}</Typography>
                        </Box>
                        <Button variant="contained" size="large">Submit</Button>
                    </Box>
                </Paper >
            </Box >
        </Box >
    )
}