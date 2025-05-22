import {applyMiddleware, createStore} from 'redux';
import CounterReducer from '../reducers/CounterReducer';
import {thunk} from 'redux-thunk';
const store=createStore(CounterReducer, applyMiddleware(thunk));
export default store;

//instead of using createStore we can use configure score
// import {configureStore} from 'reduxjs/toolkit'
// import CounterReducer from '../reducers/CounterReducer';
//const store=configureStore9({
//  reducer:CounterReducer})