import React, { useEffect } from 'react';
import { Avatar, Button, Card, CardHeader, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, findProducts } from '../../State/Product/Action';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const ProductsTable = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { products } = useSelector(store => store);

    // Xử lý sự kiện xóa sản phẩm
    const handleProductDelete = (productId) => {
        dispatch(deleteProduct(productId));
    }

    const handleUpdateClick = (productId) => {
        navigate(`/admin/product/update/${productId}`);
    }

    // Xử lý sự kiện thay đổi trang phân trang
    const handlePaginationChange = (event, value) => {
        const searchParams = new URLSearchParams(location.search)
        searchParams.set("page", value);
        const query = searchParams.toString();
        navigate({ search: `?${query}` })
    }

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const pageNumber = searchParams.get("page") || 1;

        const data = {
            category: "",
            colors: [],
            sizes: [],
            minPrice: 0,
            maxPrice: 100000,
            minDiscount: 0,
            sort: "price_low",
            pageNumber: pageNumber - 1,
            pageSize: 10,
            stock: ""
        }

        dispatch(findProducts(data));
    }, [location.search, products.deletedProduct]);

    return (
        <div className='p-5'>
            <Card className='mt-2 bg-[#1b1b1b]'>
                <CardHeader title="All Products" />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Image</TableCell>
                                <TableCell align="left">Title</TableCell>
                                <TableCell align="center">Id</TableCell>
                                <TableCell align="left">Category</TableCell>
                                <TableCell align="center">Price</TableCell>
                                <TableCell align="center">Quantity</TableCell>
                                <TableCell align="center">Update</TableCell>
                                <TableCell align="center">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products?.products?.content?.map((item) => (
                                <TableRow
                                    key={item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left">
                                        <Avatar src={item.imageUrl}></Avatar>
                                    </TableCell>
                                    <TableCell align='left' scope="row">
                                        {item.title}
                                    </TableCell>
                                    <TableCell align="center">{item.id}</TableCell>
                                    <TableCell align="left">{item.category.name}</TableCell>
                                    <TableCell align="center">{item.price}</TableCell>
                                    <TableCell align="center">{item.quantity}</TableCell>
                                    <TableCell align="center">
                                        <Button onClick={() => handleUpdateClick(item.id)} variant='outlined'
                                            component={Link} to={`/admin/product/update/${item.id}`}>Update</Button>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button onClick={() => handleProductDelete(item.id)} variant='outlined'>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>

            {/* Phân trang */}
            <section className="w-full px-[3.6rem]">
                <div className="px-4 py-5 flex justify-center">
                    <Pagination count={products.products?.totalPages} color="secondary"
                        onChange={handlePaginationChange} />
                </div>
            </section>
        </div>
    );
}

export default ProductsTable;
