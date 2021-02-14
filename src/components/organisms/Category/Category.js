import React from 'react';
import CategoryCard from '../../molecules/Categorycard/CategoryCard';
import './style.css';

const Category = ({content}) => {
    return (
        <div className="category-wrapper">
            {content.map((cat, index) => {
                return (
                    <CategoryCard image={cat.image} content={cat.text} key={index}/>
                )
            })}
            
        </div>
    );
};

export default Category;