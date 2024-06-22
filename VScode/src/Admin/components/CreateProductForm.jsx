import {
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography
} from '@mui/material';
import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux';
import { createProduct } from '../../State/Product/Action';

const CreateProductForm = () => {

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
        topLavelCategory: "",
        secondLavelCategory: "",
        thirdLavelCategory: "",
        description: "",
    });

    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt")

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData((prevSate) => ({
            ...prevSate,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProduct(productData))
        console.log(productData);
    }

    return (
        <div className="p-10">
            <Typography
                variant="h3"
                sx={{ textAlign: "center" }}
                className="py-10 text-center"
            >
                Add New Product
            </Typography>
            <form
                onSubmit={handleSubmit}
                className="createProductContainer min-h-screen"
            >
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

                    <Grid item xs={6} sm={4}>
                        <FormControl fullWidth>
                            <InputLabel>Top Level Category</InputLabel>
                            <Select
                                name="topLavelCategory"
                                value={productData.topLavelCategory}
                                onChange={handleChange}
                                label="Top Level Category"
                            >
                                <MenuItem value="sach">Sách</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth>
                            <InputLabel>Second Level Category</InputLabel>
                            <Select
                                name="secondLavelCategory"
                                value={productData.secondLavelCategory}
                                onChange={handleChange}
                                label="Second Level Category"
                            >
                                <MenuItem value="sach_hay">Sách Hay</MenuItem>
                                <MenuItem value="sach_tham_khao">Sách Tham Khảo</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={6} sm={4}>
                        <FormControl fullWidth>
                            <InputLabel>Third Level Category</InputLabel>
                            <Select
                                name="thirdLavelCategory"
                                value={productData.thirdLavelCategory}
                                onChange={handleChange}
                                label="Third Level Category"
                            >
                                <MenuItem value="hanh_dong">Văn Học Hành Động</MenuItem>
                                <MenuItem value="tam_ly_hoc">Tâm Lý Học</MenuItem>
                                <MenuItem value="huong_nghiep">Hướng Nghiệp Và Phát Triển Bản Thân</MenuItem>
                                <MenuItem value="tieng_anh">Tiếng Anh</MenuItem>
                                <MenuItem value="van_hoc_lang_man">Văn Học Lãng Mạn</MenuItem>
                            </Select>
                        </FormControl>
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
                            Add New Product
                        </Button>
                    </Grid>

                </Grid>
            </form>

        </div>
    );
};

export default CreateProductForm   