const ActionType = {
  SET_MESSAGE: 'SET_MESSAGE',
};

const setMessageCreator = (value) => ({
  type: ActionType.SET_MESSAGE,
  payload: {
    value,
  },
});

export {
  ActionType,
  setMessageCreator,
};
