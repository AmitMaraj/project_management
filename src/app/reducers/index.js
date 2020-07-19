import {combineReducers} from 'redux';

import projectReducer from './projectReducer';

const initialState = {
    // loading: false,
    // error: ''
};

const rootReducer = (state = initialState, action) => {
    // console.log('root reducer ', state);

    return state;
}

export default combineReducers({
    rootReducer,
    projectReducer
});