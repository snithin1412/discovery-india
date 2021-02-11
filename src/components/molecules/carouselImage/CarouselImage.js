import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../atoms/image/Image';

const CarouselImage = ({imageContent}) => {
    return (
        <div>
            <Image className="border-rad-10" location={imageContent.img} alt={imageContent.imgAlt} width="875" height="490" />
        </div>
    );
};

CarouselImage.propTypes = {};

export default CarouselImage;