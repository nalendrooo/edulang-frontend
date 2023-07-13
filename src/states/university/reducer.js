import { ActionType } from './action';

const universityReducer = (university = [], action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_SEARCH_UNIVERSITY:
      return action.payload.university;
    default:
      return university;
  }
};

export default universityReducer;
