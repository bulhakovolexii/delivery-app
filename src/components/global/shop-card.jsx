import {
    Button,
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    Typography
} from "@mui/material";

import DoneIcon from '@mui/icons-material/Done';

export default function ShopCard({ shop, good, addGoodInCart }) {
    return (
        <Card
            variant="outlined"
            sx={{
                width: { xs: "100%", sm: "calc(50% - 14px)" },
                display: "flex",
                flexDirection: "column"
            }}>
            <CardMedia
                sx={{
                    height: 240,
                }}
                image={good.img}
            />
            <CardHeader
                sx={{
                    "& .MuiCardHeader-action": {
                        alignSelf: "center",
                        margin: 0
                    }
                }}
                title={good.name}
                action={<Typography variant="h6">${good.price}</Typography>}
                subheader={shop}
            />
            <CardActions
                sx={{
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    flexGrow: 1,
                    padding: "0 16px 16px 16px",
                }}
            >
                <Button
                    variant="contained"
                    disabled={good.isInCart}
                    onClick={() => addGoodInCart(good)}
                    startIcon={good.isInCart ? <DoneIcon /> : ""}
                    sx={{
                        "&.Mui-disabled": {
                            bgcolor: "#2e7d32",
                            color: "#fff"
                        }
                    }}
                >
                    {good.isInCart ? "In Cart" : "Add to Cart"}
                </Button>
            </CardActions>
        </Card>
    )
}
