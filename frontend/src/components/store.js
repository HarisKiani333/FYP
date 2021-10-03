import {createStore,applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { profileDetailReducer, profileListReducer } from '../reducers/profileReducer.js';
import { UserSigninReducer } from '../reducers/userReducer.js';

const initalState={};
const reducer=combineReducers({
profileList:profileListReducer,
profileDetails:profileDetailReducer,
userSignin:UserSigninReducer,
});


const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(reducer,initalState,composeEnhancer(applyMiddleware(thunk)));

export default store;