import React from 'react'
import { mainCarouselData } from './MainCaroselData'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCrosel = () => {

    const items = mainCarouselData.map((item)=> <img className='cursor-pointer' 
    role='presentation' src={item.image} alt="" style={{ width: '100%', height: '600px' }}/>)
    return (
        <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
    )
}

export default MainCrosel