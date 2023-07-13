import { ActionType } from './action';

const questionReducer = (question = {}, action = {}) => {
  switch (action.type) {
    case ActionType.SET_RECOMENDATION:
      return action.payload.question;
    default:
      return question;
  }
};

export default questionReducer;
