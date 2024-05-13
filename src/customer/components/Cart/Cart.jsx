import React from "react";
import CartItem from "./CartItem";
import { Button, Divider } from "@mui/material";

const Cart = () => {
    return (
        <div>


            <div className="lg:grid grid-cols-3 lg:px-16 relative">
                <div className="col-span-2">
                    {[1, 1, 1, 1].map((item) => <CartItem />)}
                </div>

                <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
                    <div className="border">
                        <p className="uppercase font-bold opacity-60 pb-4"> Chi tiết thanh toán</p>
                        <hr />
                        <div className="space-y-3 font-semibold mb-10">
                            <div className="flex justify-between pt-3 text-black">
                                <span>Giá bán</span>
                                <span>85.000 VND</span>

                            </div>
                            <div className="flex justify-between pt-3 text-black">
                                <span>Giảm giá</span>
                                <span>0 VND</span>

                            </div>
                            <div className="flex justify-between pt-3 text-black">
                                <span>Phí vận chuyển</span>
                                <span>30.000 VND</span>

                            </div>
                            <div className="flex justify-between pt-3 text-black font-bold">
                                <span>Tổng tiền</span>
                                <span>115.000 VND</span>

                            </div>

                        </div>
                        <Button variant='contained' className="w-full mt-5" sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#0A68FF" }}>
                            Mua ngay
                        </Button>
                    </div>

                </div>

            </div>



        </div>
    )
}
export default Cart