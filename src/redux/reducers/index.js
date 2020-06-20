import { combineReducers } from 'redux';
import counterReducer from './countReducer';
import helloReducer from './helloReducer';


export default combineReducers({
    counter : counterReducer,
    hello : helloReducer
})