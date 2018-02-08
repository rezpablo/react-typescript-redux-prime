import {Action, handleActions} from 'redux-actions';
import {User} from "./User";
import {ADD_USER} from "./ActionTypes";

const initialState: User = <User>{
  id:  0,
  name: 'Name'
};

export default handleActions<User, User>({

  [ADD_USER]: (state, action : Action<User>): User => {


      let userb: any = action.payload;
      let usera: User = new User();
      usera.id = userb.id;
      usera.name = userb.name;

      console.log(usera);

      return usera;
  }
  // {
  //   console.log(state);
  //   console.log(action);
  //   return {
  //     id: 0,
  //     name: ""
  //   }
  // }
  ,


}, initialState);
