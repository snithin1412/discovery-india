import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Text from '../text/Text';

const InputText = ({inputStyle, placeHolder, inputValue}) => {
    return (
        <React.Fragment>
            <input className={inputStyle} autoComplete="off" maxLength="100" type="text" 
            value={inputValue} placeholder={placeHolder} />
            <Text content="&#128269;" type="search-icon"/>
        </React.Fragment>
    );
};

export default InputText;