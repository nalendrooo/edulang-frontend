import { ActionType } from './action';

const answerReducer = (answer = {}, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_ANSWER:
      return action.payload.answer;
    default:
      return answer;
  }
};

export default answerReducer;
