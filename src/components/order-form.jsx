import { Alert, Box, Button, Paper, Snackbar, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
    name: yup
        .string("Enter your name")
        .required("Name is required"),
    email: yup
        .string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    phone: yup
        .string("Enter your phone")
        .min(10, "Phone should be of minimum 8 characters length")
        .required("Phone is required"),
    address: yup
        .string("Enter your address")
        .required("Address is required"),
});

export default function OrderForm({ cart, postOrder }) {
    const [sumOfCart, setSumOfCart] = useState(0);
    const [cartIsEmpty, setCartIsEmpty] = useState(false);
    const [succes, setSucces] = useState(false);

    useEffect(() => {
        let sum = 0;
        cart.forEach((good) => { sum += good.pieces * good.price });
        setSumOfCart(sum.toFixed(2));
    }, [cart])

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            address: ""
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            if (cart.length === 0) {
                setCartIsEmpty(true)
            } else {
                postOrder(values, cart);
                setSucces(true);
            }
        }
    });

    const handleCartIsEmpty = () => {
        setCartIsEmpty(!cartIsEmpty);
    }

    const handleSucces = () => {
        setSucces(!succes);
    }

    return (
        <Box sx={{
            gridColumn: { xs: "span 12", md: "span 6" },
        }}>
            <Paper elevation={5}>
                <form onSubmit={formik.handleSubmit}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        p={4}
                        gap={5}
                    >
                        <TextField
                            label="Name:"
                            type="text"
                            variant="standard"
                            id="name"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />
                        <TextField
                            label="Email:"
                            type="email"
                            variant="standard"
                            id="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField
                            label="Phone:"
                            type="tel"
                            variant="standard"
                            id="phone"
                            name="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                            helperText={formik.touched.phone && formik.errors.phone}
                        />
                        <TextField
                            label="Address:"
                            type="text"
                            variant="standard"
                            id="address"
                            name="address"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            error={formik.touched.address && Boolean(formik.errors.address)}
                            helperText={formik.touched.address && formik.errors.address}
                        />
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
                        <Button
                            variant="contained"
                            size="large"
                            type="submit">
                            Submit
                        </Button>
                    </Box>
                </form>
            </Paper >
            <Snackbar
                open={cartIsEmpty}
                autoHideDuration={6000}
                onClose={handleCartIsEmpty}
            >
                <Alert severity="error">Cart is Empty</Alert>
            </Snackbar>
            <Snackbar
                open={succes}
                autoHideDuration={6000}
                onClose={handleSucces}
            >
                <Alert severity="success">Order is processed!</Alert>
            </Snackbar>
        </Box >
    )
}