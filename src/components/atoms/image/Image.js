import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Image = ({location, width, height, alt, className}) => {
    return (
        <img className={className}  src={location} width={width} height={height} alt={alt}/>
    );
};

Image.propTypes = {
    location: PropTypes.string
};

export default Image;