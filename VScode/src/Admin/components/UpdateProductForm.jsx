import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { findProductsById, updateProduct } from '../../State/Product/Action';
import {
    Button,
    Grid,
    TextField,
    Typography
} from '@mui/material';

const UpdateProductForm = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product } = useSelector(state => state.products || {});

    const [productData, setProductData] = useState({
        imageUrl: "",
        author: "",
        title: "",
        publisher: "",
        isbn: "",
        discountedPrice: "",
        price: "",
        discountPercent: "",
        quantity: "",
        description: "",
    });

    useEffect(() => {
        if (id) {
            dispatch(findProductsById({ productId: id }));
        }
    }, [dispatch, id]);

    useEffect(() => {
        if (product) {
            setProductData({
                imageUrl: product.imageUrl || "",
                author: product.author || "",
                title: product.title || "",
                publisher: product.publisher || "",
                isbn: product.isbn || "",
                discountedPrice: product.discountedPrice || "",
                price: product.price || "",
                discountPercent: product.discountPercent || "",
                quantity: product.quantity || "",
                description: product.description || "",
            });
        }
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProduct({ ...productData, id }));
    };

    return (
        <div className="p-10">
            <Typography variant="h3" sx={{ textAlign: "center" }} className="py-10 text-center">
                Update Product
            </Typography>
            <form onSubmit={handleSubmit} className="createProductContainer min-h-screen">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Image URL"
                            name="imageUrl"
                            value={productData.imageUrl}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Author"
                            name="author"
                            value={productData.author}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Title"
                            name="title"
                            value={productData.title}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Publisher"
                            name="publisher"
                            value={productData.publisher}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="ISBN"
                            name="isbn"
                            value={productData.isbn}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Quantity"
                            name="quantity"
                            value={productData.quantity}
                            onChange={handleChange}
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Price"
                            name="price"
                            value={productData.price}
                            onChange={handleChange}
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Discounted Price"
                            name="discountedPrice"
                            value={productData.discountedPrice}
                            onChange={handleChange}
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Discount Percentage"
                            name="discountPercent"
                            value={productData.discountPercent}
                            onChange={handleChange}
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            name="description"
                            rows={10}
                            onChange={handleChange}
                            value={productData.description}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            sx={{ p: 1.8 }}
                            className="py-20"
                            size="large"
                            type="submit"
                        >
                            Update Product
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default UpdateProductForm;
