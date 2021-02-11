import React from 'react';
import Header from '../organisms/header/Header';
import Carousel from '../organisms/Carousel/Carousel';

const Template = ({headerData, carouselData}) => {
    return (
        <div>
            <Header content={headerData}/>
            <Carousel content={carouselData}/>
        </div>
    );
};

export default Template;