import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";

const Cart = () => {
    const navigate = useNavigate();
    const {cart} = useSelector(store=>store)
    const dispatch = useDispatch();
    const handleCheckout = () => {
        navigate("/checkout?step=2")
    }

    useEffect(()=>{
        dispatch(getCart())
    },[cart.updateCartItem, cart.deleteCartItem])

    return (
        <div>


            <div className="lg:grid grid-cols-3 lg:px-16 relative">
                <div className="col-span-2">
                    {cart.cart?.cartItems.map((item) => <CartItem item = {item}/>)}
                </div>

                <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
                    <div className="border">
                        <p className="uppercase font-bold opacity-60 pb-4"> Chi tiết thanh toán</p>
                        <hr />
                        <div className="space-y-3 font-semibold mb-10">
                            <div className="flex justify-between pt-3 text-black">
                                <span>Giá bán</span>
                                <span>{cart.cart?.totalPrice} VND</span>

                            </div>
                            <div className="flex justify-between pt-3 text-black">
                                <span>Giảm giá</span>
                                <span className='text-green-600'>-{cart.cart?.discounte} VND</span>

                            </div>
                            <div className="flex justify-between pt-3 text-black">
                                <span>Phí vận chuyển</span>
                                <span className='text-green-600'>30.000 VND</span>

                            </div>
                            <div className="flex justify-between pt-3 text-black font-bold">
                                <span>Tổng tiền</span>
                                <span className='text-green-600'>{cart.cart?.totalDiscountedPrice}</span>

                            </div>

                        </div>
                        <Button onClick={handleCheckout} variant='contained' className="w-full mt-5" 
                        sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}>
                            Mua ngay
                        </Button>
                    </div>

                </div>

            </div>



        </div>
    )
}
export default Cart