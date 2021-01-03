import React from 'react';
import styles from './Keyboard.module.css';
import Button from "./Button/Button";


const Keyboard = ({store, takeOutput}) => {
    const buttons = store.map(button => (
        <Button
            key = {button.id}
            type = {button.type}
            value = {button.value}
            dataOutput = {takeOutput}
        />
    ))
    return (
        <div className={styles.Keyboard}>
            {buttons}
        </div>
    )
}

export default Keyboard;