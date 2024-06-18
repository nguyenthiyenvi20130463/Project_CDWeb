// export const color = [
//     "white",
//     "Black",
//     "Red",
//     "marun",
//     "Being",
//     "Pink",
//     "Green",
//     "Yellow",
// ];

export const filters = [

];

export const singleFilter = [
    // {
    //     id: "categories",
    //     name: "Categories",
    //     options: [
    //         { value: "huong_nghiep", label: "Hướng Nghiệp & Phát Triển Bản Thân" },
    //         { value: "van_hoc_lang_man", label: "Văn Học Lãng Mạn" },
    //         { value: "van_hoc_hanh_dong", label: "Văn Học Hành Động, Tội Phạm & Kinh Dị" },
    //         { value: "tieng_anh", label: "Tiếng Anh" }
    //     ],
    // },

    {
        id: "price",
        name: "Price",
        options: [
            { value: "10-39", label: "10K-39k" },
            { value: "40-79", label: "40K-79k" },
            { value: "80-109", label: "80K-109k" },
            { value: "110-139", label: "110K-139k" },
        ],
    }
];

export const sortOptions = [

    { name: "Price: Low to High", query: "price_low", current: false },
    { name: "Price: High to Low", query: "price_high", current: false },
];