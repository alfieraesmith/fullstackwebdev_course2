import {COMMENTS} from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state=COMMENTS, action) => {

    switch(action.type){
        case ActionTypes.ADD_COMMENT:
            let comment = action.payload;

            // state in this context is COMMMENTS array
            // length can be id as our id starts are 0. The first comment has id 0.
            comment.id =state.length;
            comment.date = new Date().toISOString();

            // concat: immutable operation - add new element into array and return NEW object
            return  state.concat(comment);

        default: return state;
    }

};

/* Switch statements are a new ES6 for writing a series of if, if else....else statements
* where we 'switch* code block based on whether input (action.type) === case value
*
* else - no match - is captured by the 'default' case */