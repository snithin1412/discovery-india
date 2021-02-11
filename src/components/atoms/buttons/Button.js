import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Text from '../text/Text';

const Button = ({btnName, btnColor, type}) => {
    return (
        <button className={ `btn ${btnColor}`} type={type}>
            <Text content={btnName}/>
        </button>
    )
};

Button.defaultProps = {
    btnColor: "primary"
}

Button.propTypes = {
    btnName: PropTypes.string,
    btnColor: PropTypes.string,
    type: PropTypes.string
};

export default Button;