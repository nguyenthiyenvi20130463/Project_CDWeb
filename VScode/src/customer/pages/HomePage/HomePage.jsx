import React from 'react'
import MainCrosel from '../../components/HomeCarosel/MainCrosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import { spnb } from '../../../Data/spnb'

const HomePage = () => {
    return (
        <div>
            <MainCrosel/>

            <div className='spacy-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
                <HomeSectionCarosel data={spnb} sectionName={"Sản Phẩm Mới Nhất"}/>
                <div style={{ marginBottom: '40px' }}></div> 
                <HomeSectionCarosel data={spnb} sectionName={"Sản Phẩm Nổi Bật"}/>
                <div style={{ marginBottom: '40px' }}></div>
            </div>  
        </div>
    )
}

export default HomePage