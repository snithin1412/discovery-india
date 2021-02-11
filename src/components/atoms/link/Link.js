import React from 'react';
import './style.css';
import Text from '../text/Text'

const Link = ({location, name, active, className, onClick}) => {
    return (
        <a className={`link ${className}`} href={location} onClick={onClick}><Text content={name} type={active}/></a>
    );
};

export default Link;