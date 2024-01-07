import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import headingImage from "@/assets/The Dragon News.png"
import { getCurrentDate } from '@/utils/getCurrentDate';
const Header = () => {
    const currentDate=getCurrentDate();
    return (
       <Box className="w-full my-5">
        <Container>
            <Image className='mx-auto' src={headingImage} alt="header image" width={500} height={500}/>
            <Typography className='my-2' variant='body2' color="grey" textAlign="center">
                Journalist without fear
            </Typography>
            <Typography  textAlign="center">
                {currentDate}
            </Typography>
        </Container>
       </Box>
    );
};

export default Header;