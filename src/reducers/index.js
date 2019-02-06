import { combineReducers } from 'redux';
import { appReducer } from './appReducer';

const rootReducers = combineReducers({
    table: appReducer 
});

export default rootReducers;