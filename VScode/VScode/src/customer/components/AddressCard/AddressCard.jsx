import React from "react";

const AddressCard = ({ address }) => {
    return (
        <div>
            <div className="space-y-3">
                <p className="font-semibold">{address?.firstName + " " + address?.lastName}</p>
                {/* <p>{address?.state}, {address?.city}</p> */}
                <p>{address?.state},{address?.streetAddress},{address?.zipCode}</p>
                <div className="space-y-1">
                    <p className="font-semibold">Số điện thoại</p>
                    <p>{address?.mobile}</p>
                </div>
            </div>
        </div>
    )
}
export default AddressCard