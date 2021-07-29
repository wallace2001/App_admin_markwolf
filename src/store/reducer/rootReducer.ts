/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';
import { AuthReducer } from './auth.reducer';
import { LoadingReducer } from './loading.reducer';
import { MessageReducer } from './message.reducer';

const rootReducer = combineReducers({
    AuthReducer,
    LoadingReducer,
    MessageReducer
});

export default rootReducer;