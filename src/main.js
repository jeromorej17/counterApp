// main.js

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { createStore } from 'redux';
import reducer from './reducers'

const store = createStore(reducer);

render (
    <Provider store={store}>
        <App />
    </Provider>,
  
    document.getElementById('root')
)