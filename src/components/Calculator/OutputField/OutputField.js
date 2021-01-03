import React from 'react';
import styles from './OutputField.module.css';

const OutputField = ({inputData, resultData}) => (
    <div className={styles.OutputField}>
        <input
            type='text'
            value={inputData}
            placeholder={resultData}
            readOnly
        />
    </div>
)

export default OutputField;