import React, { useState, useEffect } from 'react';
import Link from '../../atoms/link/Link';
import Image from '../../atoms/image/Image';
import CarouselText from '../../molecules/carouselText/CarouselText';
import CarouselImage from '../..//molecules/carouselImage/CarouselImage';
import CarouselIndicator from '../../molecules/carouselIndicator/CarouselIndicator';
import './style.css';

const Carousel = ({content}) => {
const [activeContent, setActiveContent] = useState(0);
const carouselContent = content;

useEffect(() => {
    const next = (activeContent + 1) % carouselContent.length;
    const id = setTimeout(() => setActiveContent(next), 3000);
    return () => clearTimeout(id);
    }, [activeContent]);

const prevContent = (e) => {
    e.preventDefault();
    if (activeContent === 0) setActiveContent(carouselContent.length - 1);
    else setActiveContent(activeContent - 1);
}

const nextContent = (e) => {
    e.preventDefault();
    if (activeContent === carouselContent.length - 1) setActiveContent(0);
    else setActiveContent(activeContent + 1);
}

const currentContent = (current) => {
    setActiveContent(current);
}

    return (
        <React.Fragment>
            {carouselContent.map((item, index) => {
                return (
                    (index === activeContent) && <div className="carousel" key={index}>
                        <Link name={<Image location="/previous.png" alt="Discovery" width="24"/>} location="/" onClick={prevContent} active="text-nav" className="nav-icon"/>
                        <CarouselText textContent={item} key={index}/>
                        <CarouselImage imageContent={item.image} />
                        <Link name={<Image location="/next.png" alt="Discovery" width="24"/>} location="/" onClick={nextContent} active="text-nav" className="nav-icon"/>
                    </div>
                );
            })}
            <div className="carousel-indicator-position">
            {(carouselContent).map((indicator, index) => {
                return (
                    <CarouselIndicator key={index} onClick={(e) =>{e.preventDefault(); currentContent(index)}} type={activeContent === index ? "carousel-indicator-active" : "carousel-indicator-inactive"}/>
                );
            })}
            </div>
      </React.Fragment>
    );
};

export default Carousel;