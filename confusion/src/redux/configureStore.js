import { createStore, combineReducers, applyMiddleware} from 'redux';
import {Dishes} from "./dishes";
import {Comments} from "./comments";
import {Promotions} from "./promotions";
import {Leaders} from "./leaders";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// we've split our reducer into four parts, one for each set of state changes
// import four sub-reducers and use combineReducers to compile them.

export const ConfigureStore = () => {

    let reducer = combineReducers({
        dishes:Dishes,
        comments:Comments,
        promotions:Promotions,
        leaders:Leaders
    });

    return createStore(reducer, applyMiddleware(thunk, logger));
};