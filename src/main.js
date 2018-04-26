// main.js

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers'
import counterReducer from './reducers/counterReducer';

const store = createStore(    
    reducer, { counterReducer: 0},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()   
);

render (   
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)