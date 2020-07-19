import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index';

// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });
