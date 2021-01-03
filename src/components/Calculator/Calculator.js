import React from 'react';
import styles from './Calculator.module.css';
import OutputField from "./OutputField/OutputField";
import Keyboard from "./Keyboard/Keyboard";
import {observer} from "mobx-react";

const Calculator = observer(({calcStore, calcButtons}) => (
    <div className = {styles.Calculator}>
        <OutputField
            inputData = {calcStore.currentValue}
            resultData = {calcStore.result}
        />
        <Keyboard
            store = {calcButtons}
            takeOutput = {calcStore.outputData}
            />
    </div>
))

export default Calculator;