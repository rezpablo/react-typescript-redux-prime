import {createAction} from 'redux-actions';

import {Person} from './model';

import {ADD_PERSON} from './constants/ActionTypes';

const addPerson = createAction<Person, string>(
    ADD_PERSON,
  (name: string) => ({ name })
);

export {
  addPerson
}
