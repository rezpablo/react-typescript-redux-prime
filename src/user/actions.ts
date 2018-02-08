import {createAction} from 'redux-actions';


import {ADD_USER} from './ActionTypes';
import {User} from "./User";

const addUser = createAction<User, User>(
    ADD_USER,
  (user: User) =>
      user
);

export {
  addUser
}