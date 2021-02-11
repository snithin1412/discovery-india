import React from 'react';
import Header from '../organisms/header/Header';
import Carousel from '../organisms/Carousel/Carousel';
import CategoryCard from '../molecules/Categorycard/CategoryCard';
import Category from '../organisms/Category/Category';

const Template = ({headerData, carouselData, categoryData}) => {
    return (
        <div>
            <Header content={headerData}/>
            <Carousel content={carouselData}/>
            <Category content={categoryData}/>
        </div>
    );
};

export default Template;