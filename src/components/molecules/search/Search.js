import React from 'react';
import InputText from '../../atoms/input-text/InputText';
import Button from '../../atoms/buttons/Button';
import './style.css';

const Search = () => {
    return (
        <div className="search">
            <InputText inputStyle="search-input" placeHolder="Search for shows, episodes, shorts etc."/>
            <Button btnName="Sign In"  type="submit" />
        </div>
    );
};

export default Search;