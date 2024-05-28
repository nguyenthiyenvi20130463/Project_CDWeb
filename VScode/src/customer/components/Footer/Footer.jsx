import React from 'react';
import { Grid, Button, Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <div>
            <Grid container className='bg-black text-white text-center mt-10' sx={{ bgcolor: "black", color: "white", py: 3, justifyContent: 'space-evenly' }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant='h5' sx={{ mb: 2 }}>Thông Tin</Typography>

                    <div style={{ marginBottom: '20px' }}></div> 

                    <div>
                        <Button variant='subtitle1' sx={{ mb: 1 }}>Giới Thiệu</Button>
                    </div>
                    <div>
                        <Button variant='subtitle1' sx={{ mb: 1 }}>Liên Hệ</Button>
                    </div>
                    <div>
                        <Button variant='subtitle1' sx={{ mb: 1 }}>Blog</Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant='h5' sx={{ mb: 2 }}>Sản Phẩm</Typography>

                    <div style={{ marginBottom: '20px' }}></div> 

                    <div>
                        <Button variant='subtitle1' sx={{ mb: 1 }}>Sách Giáo Trình</Button>
                    </div>
                    <div>
                        <Button variant='subtitle1' sx={{ mb: 1 }}>Sách Tham Khảo</Button>
                    </div>
                    <div>
                        <Button variant='subtitle1' sx={{ mb: 1 }}>Sách Tiếng Anh</Button>
                    </div>
                    <div>
                        <Button variant='subtitle1' sx={{ mb: 1 }}>Sách Chuyên Ngành</Button>
                    </div>
                    <div>
                        <Button variant='subtitle1' sx={{ mb: 1 }}>Sách Hướng Nghiệp & Phát Triển Bản Thân</Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant='h5' sx={{ mb: 2 }}>Chính Sách</Typography>

                    <div style={{ marginBottom: '20px' }}></div> 

                    <div>
                        <Button variant='subtitle1' sx={{ mb: 1 }}>Chính Sách Và Quy Định Chung</Button>
                    </div>
                    <div>
                        <Button variant='subtitle1' sx={{ mb: 1 }}>Hướng Dẫn Mua Hàng</Button>
                    </div>
                    <div>
                        <Button variant='subtitle1' sx={{ mb: 1 }}>Hướng Dẫn Thanh Toán</Button>
                    </div>
                    <div>
                        <Button variant='subtitle1' sx={{ mb: 1 }}>Chính Sách Đổi Trả</Button>
                    </div>
                </Grid>

                <Grid item xs={12} sx={{ marginTop: '70px'}}>
                    <Typography variant="body2" align="center">
                        &copy; 2024 Book Store. All rights reserved.
                    </Typography>
                    <Typography variant="body2" align="center">
                        Made with love by Me.
                    </Typography>
                    <Typography variant="body2" align="center">
                        Icons made by{' '}
                        <Link href="https://www.freepik.com" color="inherit" underline="always">
                            Freepik
                        </Link>{' '}
                        from{' '}
                        <Link href="https://www.flaticon.com/" color="inherit" underline="always">
                            www.flaticon.com
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default Footer;
