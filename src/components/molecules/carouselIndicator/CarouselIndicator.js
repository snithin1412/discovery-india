import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../atoms/link/Link';

const CarouselIndicator = ({type, onClick}) => {
    return (
        <Link location="/" onClick={onClick} className={type} />
    );
};

CarouselIndicator.propTypes = {};

export default CarouselIndicator;