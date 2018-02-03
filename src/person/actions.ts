import {createAction} from 'redux-actions';

import {Person} from './model';

import {ADD_PERSON} from './constants/ActionTypes';

const addPerson = createAction<Person, string, string>(
    ADD_PERSON,
  (name: string, surname: string) => ({ name, surname })
);

export {
  addPerson
}
