import {combineReducers} from 'redux';

import person from '../person';
import user from '../user';
import {createForms} from "react-redux-form";

const rootReducer = combineReducers({
    person,
    user,
    ...createForms({
        newUser: {id: 0, name: ""},
    })
});

export default rootReducer;
