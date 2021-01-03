import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./store/store";
import {buttons} from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <App
        buttons={buttons}
        state={store}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
