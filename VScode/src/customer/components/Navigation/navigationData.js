export const navigation = {
  categories: [
    {
      id: 'home',
      name: 'Trang Chủ',
      featured: [
        {
          name: 'Sách Hay',
          href: '/',
          imageSrc: 'https://i.pinimg.com/564x/3e/f2/da/3ef2da438412d71d5576e6531915d70e.jpg',          
        },
        {
          name: 'Sách Hay',
          href: '/',
          imageSrc: 'https://i.pinimg.com/564x/c8/82/d4/c882d4585732d0a71abc16d2daacbdd6.jpg',        
        },
      ],
      sections: [
        {
          id: 'top',
          name: 'Top',
          items: [
            { name: 'Sản Phẩm Bán Chạy', id:"ban_chay" },
            { name: 'Sản Phẩm Yêu Thích', id:"yeu_thich" },
            { name: 'Sản Phẩm Nổi Bật', id:"noi_bat" },
           
          ],
        },
        {
          id: 'nxb',
          name: 'Nhà Xuất Bản',
          items : [
            { name: 'Thế Giới', id:"the_gioi" },
            { name: 'Hội Nhà Văn', id:"nha_van" },
            { name: 'Giáo Dục Việt Nam', id:"gd_viet_nam" },
          ]
        },
        {
          id: 'dvvc',
          name: 'Đơn Vị Vận Chuyển',
          items : [
            { name: 'Hỏa Tốc', id:"#" },
            { name: 'TP.HCM', id:"#" },
            { name: 'Tiết Kiệm', id:"#" },
          ]
        }
      ],
    },
    {
      id: 'product',
      name: 'Sản Phẩm',
      featured: [
        {
          name: 'Sách Hay',
          id: '#',
          imageSrc: 'https://i.pinimg.com/564x/dc/9b/bf/dc9bbfdf002bdf85743296e7cdbb572d.jpg',
        },
        {
          name: 'Sách Hay',
          id: '#',
          imageSrc: 'https://i.pinimg.com/564x/f2/90/b4/f290b4beea0423d8d3b9e2c27b2e47ba.jpg',
        },
      ],
      sections: [
        {
          id: 'sach_hay',
          name: 'Sách Hay',
          items: [
            { name: 'Văn Học Lãng Mạn ', id: 'van_hoc_lang_man' },
            { name: 'Tâm Lý Học', id: 'tam_ly_hoc' },
            { name: 'Hướng Nghiệp & Phát Triển bản thân', id: 'huong_nghiep' },
          ],
        },
        {
          id: 'hoc_tap',
          name: 'Học Tập',
          items: [
            { name: 'Giáo Trình', id: 'giao_trinh' },
            { name: 'Bộ Đề Thi Ôn Tập', id: 'de_thi' },
           
          ],
        },
        {
          id: 'tieng_anh',
          name: 'Tiếng Anh',
          items: [
            { name: 'Tiếng Anh B1', id: 'b1' },
            { name: 'Toeic', id: 'toeic' },
            { name: 'IELTS', id: 'ielts' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Giới Thiệu', id: '/' },
    { name: 'Liên Hệ', id: '/' },
  ],
}
