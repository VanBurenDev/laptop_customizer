import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import STORE from './STORE'

const FEATURES = STORE;
ReactDOM.render(<App features={FEATURES}/>, document.getElementById('root'));
