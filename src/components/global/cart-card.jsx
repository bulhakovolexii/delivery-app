import {
    Box,
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    IconButton,
    TextField,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

export default function CartCard({ good, removeGoodFromCart, setPiecesOfGood }) {
    const [pieces, setPieces] = useState(good.pieces)
    const handleSetPieces = (value) => {
        setPieces(value);
        setPiecesOfGood(good, value)
    }
    return (
        <Card
            variant="outlined"
            sx={{
                display: "flex",
                flexShrink: 0
            }}
        >
            <CardMedia
                sx={{
                    flexShrink: 0,
                    height: 150,
                    minWidth: 150,
                }}
                image={good.img}
            />
            <Box flexGrow="1">
                <CardHeader
                    title={good.name}
                    action={
                        <IconButton
                            onClick={() => removeGoodFromCart(good)}
                        >
                            <CloseIcon />
                        </IconButton>
                    }
                    subheader={"$" + good.price}
                />
                <CardActions
                    sx={{
                        padding: "0 16px 16px 16px",
                    }}
                >
                    <TextField
                        sx={{ flexGrow: 1 }}
                        label="Pieces"
                        variant="standard"
                        type="number"
                        value={pieces}
                        onChange={(e) => e.target.value >= 1 && handleSetPieces(+e.target.value)}
                    />
                </CardActions>
            </Box>
        </Card >
    )
}
