import React from 'react';
import Link from '../../atoms/link/Link';
import './style.css';

const NavLinks = () => {
    return (
        <div className="nav-links">
            <Link name="Home" location="/" active="text-link-active"/>
            <Link name="Explore" location="/" active="text-link"/>
            <Link name="Shorts" location="/" active="text-link"/>
            <Link name="MindBlown" location="/" active="text-link"/>
            <Link name="Premium" location="/" active="text-link"/>
        </div>
    );
};

export default NavLinks;