import { createStore, combineReducers} from 'redux';
import {Dishes} from "./dishes";
import {Comments} from "./comments";
import {Promotions} from "./promotions";
import {Leaders} from "./leaders";

// we've split our reducer into four parts, one for each set of state changes
// import four sub-reducers and use combineReducers to compile them.

export const ConfigureStore = () => {

    let reducer = combineReducers({
        dishes:Dishes,
        comments:Comments,
        promotions:Promotions,
        leaders:Leaders
    });

    return createStore(reducer);
};