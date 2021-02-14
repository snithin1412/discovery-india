import React from 'react';
import InputText from '../../atoms/input-text/InputText';
import Button from '../../atoms/buttons/Button';
import './style.css';

const Search = ({content}) => {
    return (
        <div className="search">
            <InputText inputStyle="search-input" placeHolder={content.placeHolder}/>
            <Button btnName={content.button}  type="submit" />
        </div>
    );
};

export default Search;