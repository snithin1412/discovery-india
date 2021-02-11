import React from 'react';
import Logo from '../../molecules/logo/Logo';
import NavLinks from '../../molecules/navLinks/NavLinks';
import Search from '../../molecules/search/Search';
import './style.css';

const header = ({content}) => {
    return (
        <div className="header">
            <Logo content={content.logo}/>
            <NavLinks content={content.nav}/>
            <Search content={content.search}/>
        </div>
    );
};


export default header;