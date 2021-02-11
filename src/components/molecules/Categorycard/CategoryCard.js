import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../atoms/image/Image';
import Text from '../../atoms/text/Text';
import './style.css';

const CategoryCard = ({image, content}) => {
    return (
        <div className="category-card">
            <Image className="border-rad-10" location={image} width="202" height="125"/>
            <div className="category-text-position"><Text content={content} type="category-text" /></div>
            
        </div>
    );
};

CategoryCard.propTypes = {};

export default CategoryCard;