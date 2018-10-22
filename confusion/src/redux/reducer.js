import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions'

// define the starting application state
export const initialState = {
    dishes: DISHES,
    comments:COMMENTS,
    promotions:PROMOTIONS,
    leaders:LEADERS};

// Reducer function is pure func taking in old state, action and returning new state.

// The first time Reducer is called by store, we won't have an "old" state to provide
// we can get round this by using initialState as default  when no old state provided.

export const Reducer = (state = initialState, action) => {
    return state;
};

/*
* General Redux practice is to split the reducer into separate parts where
* each reducer handles a different set of state changes. In our case,
* we no overlap between dishes, comments.... so we'll split the reducers down
* the lines of data sources. */

