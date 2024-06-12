import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Button } from "@mui/material";
import CartItem from "../Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../State/Order/Action";
import { useLocation } from "react-router-dom";
import { createPayment } from "../../../State/Payment/Action";

const OrderSummary = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { order } = useSelector(store => store);
    const searchParamms = new URLSearchParams(location.search);
    const orderId = searchParamms.get("order_id")

    useEffect(() => {
        dispatch(getOrderById(orderId))
    }, [orderId])

    const handleCheckout = () => {
        dispatch(createPayment(orderId))

    }
    return (
        <div>
            <div className="p-5 shadow-lg rounded-5-md border">
                <AddressCard address={order.order?.shippingAddress} />
            </div>

            <div>


                <div className="lg:grid grid-cols-3 relative">
                    <div className="col-span-2">
                        {order.order?.orderItems.map((item) => (
                            <CartItem item={item} />
                        ))}
                    </div>

                    <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
                        <div className="border">
                            <p className="uppercase font-bold opacity-60 pb-4"> Chi tiết thanh toán</p>
                            <hr />
                            <div className="space-y-3 font-semibold mb-10">
                                <div className="flex justify-between pt-3 text-black">
                                    <span>Giá bán</span>
                                    <span>{order.order?.totalPrice} VND</span>

                                </div>
                                <div className="flex justify-between pt-3 text-black">
                                    <span>Giảm giá</span>
                                    <span className="text-green-600">{order.order?.discounte} VND</span>

                                </div>
                                <div className="flex justify-between pt-3 text-black">
                                    <span>Phí vận chuyển</span>
                                    <span className="text-green-600">Free</span>

                                </div>
                                <div className="flex justify-between pt-3 text-black font-bold">
                                    <span>Tổng tiền</span>
                                    <span className="text-green-600">{order.order?.totalDiscountedPrice} VND</span>

                                </div>

                            </div>
                            <Button variant='contained' className="w-full mt-5" sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#0A68FF" }}
                                onClick={handleCheckout}>
                                Mua ngay
                            </Button>
                        </div>

                    </div>

                </div>



            </div>
        </div>
    )
}
export default OrderSummary