import {Action, handleActions} from 'redux-actions';

import {IState, Person} from './model';
import {ADD_PERSON} from './constants/ActionTypes';

const initialState: IState = [<Person>{
  id:  0,
  name: 'Name',
}];

export default handleActions<IState, Person>({
  [ADD_PERSON]: (state: IState, action: Action<Person>): IState => {
    return [{
      id: 1,
      name: 'Jon'
    }, ...state];
  },
}, initialState);
