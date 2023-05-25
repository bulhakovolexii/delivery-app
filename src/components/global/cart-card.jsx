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

export default function CartCard({ good }) {
    return (
        <Card
            elevation={0}
            sx={{ display: "flex" }}
        >
            <CardMedia
                sx={{
                    flexGrow: 2,
                    height: 150,
                }}
                image={good.img}
            />
            <Box flexGrow="1">
                <CardHeader
                    title={good.name}
                    action={
                        <IconButton>
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
                    />
                </CardActions>
            </Box>
        </Card >
    )
}
