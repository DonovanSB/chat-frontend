// @import dependencies
import { combineReducers } from 'redux';
// @end dependencies

// @import reducers
import authReducer from './auth/auth.reducer';
// @end reducers

// @import types
import * as AuthTypes from 'types/auth/auth.types';
// @end types

export interface StoreApp{
    auth: AuthTypes.AuthState
}

export default combineReducers({
    auth: authReducer
});