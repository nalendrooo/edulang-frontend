import { ActionType } from './action';

const toastReducer = (statusToast = false, action = {}) => {
  switch (action.type) {
    case ActionType.SET_TOAST:
      return action.payload.statusToast;
    default:
      return statusToast;
  }
};

export default toastReducer;
