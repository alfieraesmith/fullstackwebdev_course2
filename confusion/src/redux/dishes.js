import * as ActionTypes from './ActionTypes';

//define the initial state for dishes data
// we'll update the error message if we receive DISHES_FAILED action
// we'll update the dishes id we receive ADD_DISHES with its payload .dishes.
const initialState = {
    isLoading: true,
    errMess: null,
    dishes:[]
};

export const Dishes = (state = initialState, action) => {

    switch(action.type){
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess:null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess:null, dishes: []};

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess:action.payload, dishes: []};


        default: return state;
    }

};

/* {...js object, additional params} this is the ES6 spread operator that

1. takes a JS object,
2. updates properties on the obj according to additional params
3. returns a NEW js object.

This means that the spread operator is an immutable operator that returns
a new version of original object, not as reference to the original obj.

This means that our REDUCER function is pure where it always returns
a new state rather than a reference to the old state.


*/