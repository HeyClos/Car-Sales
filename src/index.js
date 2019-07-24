import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { myReducer } from './myReducer'

import 'bulma/css/bulma.css';
import './styles.scss';

const myStore = createStore(myReducer);
const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={myStore}> 
<App />
</Provider>, rootElement);
