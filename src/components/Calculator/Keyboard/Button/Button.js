import React from 'react';
import styles from './Button.module.css';

const Button = ({value, type, dataOutput}) => {
    let buttonStyle;
    switch (type) {
        case 'clearAction':
            buttonStyle = [styles.Button, styles.CommandType, styles.Cancel]
            break;
        case 'calcAction':
            buttonStyle = [styles.Button, styles.CommandType]
            break;
        case 'numberZero':
            buttonStyle = [styles.Button, styles.ButtonZero]
            break;
        default:
            buttonStyle = [styles.Button]
    }
    return (
        <button
            className={buttonStyle.join(' ')}
            onClick={() => dataOutput(value)}
        >
            {value}
        </button>
    )
}

export default Button;