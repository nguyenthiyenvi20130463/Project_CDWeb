import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React from "react";

const CartItem = () => {
    return (
        <div className="p-5 shadow-lg border rounded-md">
            <div className="flex items-center">
                <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
                    <img className="w-full object-cover object-top" src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lry9qviy6j7oe4" alt="" />

                </div>

                <div className="ml-5 space-y-1">

                    <p className="font-semibold">Tuổi trẻ đáng giá bao nhiêu</p>
                    <p className="opacity-70">Số lượng: 1</p>
                    <p className="opacity-70 mt-2">Shop: ViVi</p>

                    <div className='flex space-x-5 items-center text-gray-900 pt-6'>
                        <p className='font-semibold'>85.000 VND</p>
                        <p className='opacity-50 line-through'> 120.000 VND </p>
                        <p className='text-green-600 font-semibold'>5% Off</p>
                    </div>

                </div>


            </div>
            <div className="lg:flex items-center lg:space-x-10 pt-4">

                <div className="flex items-center space-x-1">
                    <IconButton>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <span className="py-1 px-6 boder rounded-sm">1</span>
                    <IconButton sx={{ color: "#0A68FF" }}>
                        <AddCircleOutlineIcon />
                    </IconButton>

                </div>

                <div>
                    <Button sx={{ color: "#0A68FF" }}>Số lượng</Button>
                </div>

            </div>
        </div>
    )
}
export default CartItem