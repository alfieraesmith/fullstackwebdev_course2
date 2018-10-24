import * as ActionTypes from './ActionTypes';
import {DISHES} from '../shared/dishes';


export const addComment  = (dishId, rating, author, comment) => {
    return ({
        type:ActionTypes.ADD_COMMENT,
        payload: {
            dishId: dishId,
            rating: rating,
            author: author,
            comment: comment
        }
    })
};

// export const fetchDishes = () => (dispatch) => {dispatch(x), dispatch(y)}
// this is a "curried" or "nested" arrow function
// Fetch dishes is a "thunk" that returns another function - our action creator.
// The inner function is returned and has access to dispatch.


// return a function that dispatches the dishes loading action and then add dishes action
// add dishes is wrapped in timeout, if limit reached (2000)
// we can set a different action to be dispatched.
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES))},
        2000);
};


export const dishesLoading = () => {
    let action = {
        type:ActionTypes.DISHES_LOADING};
    return (action);
};

export const dishesFailed = (errmess) => {
  let action = {
      type:ActionTypes.DISHES_FAILED,
      payload: errmess
  };
  return (action);
};

export const addDishes = (dishes) => {
  let action = {
      type:ActionTypes.ADD_DISHES,
      payload:dishes
  };
  return (action);
};