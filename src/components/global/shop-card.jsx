import {
    Button,
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    Typography
} from "@mui/material";

export default function ShopCard({ shop, good }) {
    return (
        <Card
            elevation={0}
            sx={{
                width: "calc(50% - 8px)",
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
                    padding: "0 16px 16px 16px",
                }}
            >
                <Button variant="contained">
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    )
}
