import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { confirmOrder, deleteOrder, deliveredOrder, getOrders, shipOrder } from '../../State/Admin/Order/Action';
import { Avatar, AvatarGroup, Button, Card, CardHeader, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const OrderTableView = () => {
    const [anchorEl, setAnchorEl] = React.useState([]);
    const open = Boolean(anchorEl);
    const handleClick = (event, index) => {
        const newAnchorElArray = [...anchorEl]
        newAnchorElArray[index] = event.currentTarget
        setAnchorEl(newAnchorElArray)
    };
    const handleClose = (index) => {
        const newAnchorElArray = [...anchorEl]
        newAnchorElArray[index] = null
        setAnchorEl(newAnchorElArray)
    };
    const dispatch = useDispatch();

    const { adminOrder } = useSelector(store => store)

    useEffect(() => {
        dispatch(getOrders())
    }, [adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered, adminOrder.deletedOrder]);

    console.log("admin Orders ", adminOrder)

    const handleShipedOrder = (orderId) => {
        dispatch(shipOrder(orderId))
        console.log("handle shipped order ", orderId)
        handleClose()
    }

    const handleConfirmedOrder = (orderId) => {
        dispatch(confirmOrder(orderId))
        console.log("handle confirmed order ", orderId)
        handleClose()
    }

    const handleDeliveredOrder = (orderId) => {
        dispatch(deliveredOrder(orderId))
        console.log("handle delivered order ", orderId)
        handleClose()
    }

    const handleDeleteOrder = (orderId) => {
        dispatch(deleteOrder(orderId))
    }

    return (
        <div className='p-10'>
            <Card className='mt-2 bg-[#1b1b1b]'>
                <CardHeader title="Recent Orders" />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Image</TableCell>
                                <TableCell align="left">Title</TableCell>
                                <TableCell align="center">Status</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {adminOrder.orders?.map((item, index) => (
                                <TableRow
                                    key={item.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="" className=''>
                                        <AvatarGroup max={3} sx={{ justifyContent: "start" }}>
                                            {item.orderItems.slice(0,3).map((orderItem) => <Avatar src={orderItem.product.imageUrl}></Avatar>)}
                                        </AvatarGroup>
                                    </TableCell>
                                    <TableCell align='left' scope="row">
                                        {item.orderItems.map((orderItem) => <p> {orderItem.product.title}</p>)}
                                        {/* {item.title} */}
                                    </TableCell>
                                    <TableCell align="center"><span className={`text-white px-5 py-2 rounded-full 
                                        ${item.orderStatus === "CONFIRMED" ? "bg-[#25CCF7]" :
                                            item.orderStatus === "SHIPPED" ? "bg-[#EEC213]" :
                                                item.orderStatus === "PLACED" ? "bg-[#6ab04c]" :
                                                    item.orderStatus == "PENDING" ? "bg-[#7B8788]" :
                                                        "bg-[#FF362E]"}`}>{item.orderStatus}</span></TableCell>


                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </div>
    )
}

export default OrderTableView   