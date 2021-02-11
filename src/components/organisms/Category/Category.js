import React from 'react';
import PropTypes from 'prop-types';
import CategoryCard from '../../molecules/Categorycard/CategoryCard';
import './style.css';

const Category = ({content}) => {
    return (
        <div className="category-wrapper">
            <CategoryCard image={content.category1.image} content={content.category1.text}/>
            <CategoryCard image={content.category2.image} content={content.category2.text}/>
            <CategoryCard image={content.category3.image} content={content.category3.text}/>
            <CategoryCard image={content.category4.image} content={content.category4.text}/>
            <CategoryCard image={content.category5.image} content={content.category5.text}/>
            <CategoryCard image={content.category6.image} content={content.category6.text}/>
        </div>
    );
};

Category.propTypes = {};

export default Category;