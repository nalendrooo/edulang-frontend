const ActionType = {
  SET_LOADING: 'SET_LOADING',
};

const setLoadingStatus = (statusLoading) => ({
  type: ActionType.SET_LOADING,
  payload: {
    statusLoading,
  },
});

export {
  ActionType,
  setLoadingStatus,
};
