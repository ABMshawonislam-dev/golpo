import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducer/index'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer,composeWithDevTools())


ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'));
