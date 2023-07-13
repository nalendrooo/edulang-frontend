const ActionType = {
  SET_TOAST: 'SET_TOAST',
};

const setToastStatus = (statusToast) => ({
  type: ActionType.SET_TOAST,
  payload: {
    statusToast,
  },
});

export {
  ActionType,
  setToastStatus,
};
