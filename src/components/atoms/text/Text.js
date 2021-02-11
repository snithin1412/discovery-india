import React from 'react';
import './style.css';

const Text = ({content, type}) => <p className={`text ${type}`}>{content}</p>

Text.defaultProps = {
    type: "text-btn"
}

export default Text;