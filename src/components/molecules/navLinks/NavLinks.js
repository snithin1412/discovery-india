import React from 'react';
import Link from '../../atoms/link/Link';
import './style.css';

const NavLinks = ({content}) => {
    return (
        <div className="nav-links">
            {content.map((linkName, index) => {
                return (
                <Link name={linkName} location="/" active={index === 0 ? "text-link-active" : "text-link"} key={index}/>
                )
            })}
        </div>
    );
};

export default NavLinks;