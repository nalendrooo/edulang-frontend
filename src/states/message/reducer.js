import { ActionType } from './action';

const messageReducer = (value = {}, action = {}) => {
  switch (action.type) {
    case ActionType.SET_MESSAGE:
      return action.payload.value;
    default:
      return value;
  }
};

export default messageReducer;
