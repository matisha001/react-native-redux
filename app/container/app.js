import React , { Component } from 'react';
import {  Navigator , View , Text , TabBarIOS} from 'react-native';
import { createStore , applyMiddleware , combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import asyncActionCallbackMiddleware from '../global/asyncActionCallbackMiddleware';
import promiseMiddleware from '../global/promiseMiddleware'
import reduxPromiseMiddleware from 'redux-promise';
import * as reducers from '../reducers/index';
import * as StartPage from './index';
import connectComponent from '../global/connectComponent';
const Merchant = connectComponent(StartPage);


const logger = createLogger({
    predicate: (getState, action) => false,
    collapsed: true,
    duration: true,
    colors: {
        prevState: () => `#FFEB3B`,
        nextState: () => `#4CAF50`,
    },
    diff: true,
});

let middlewares = [
    thunk,
    promiseMiddleware,
    reduxPromiseMiddleware,
    asyncActionCallbackMiddleware,
    logger,
]
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);
export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedTab: '',
        };
    }

    render (){
        return (
            <Provider store={store}>
                <Merchant />
            </Provider>
        )
    }
}
