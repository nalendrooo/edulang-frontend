import { ActionType } from './action';

const loadingReducer = (statusLoading = false, action = {}) => {
  switch (action.type) {
    case ActionType.SET_LOADING:
      return action.payload.statusLoading;
    default:
      return statusLoading;
  }
};

export default loadingReducer;
