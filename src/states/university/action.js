import api from '../../config/services/api';
import { setLoadingStatus } from '../loading/action';
import { setToastStatus } from '../toast/action';

const ActionType = {
  RECEIVE_SEARCH_UNIVERSITY: 'RECEIVE_SEARCH_UNIVERSITY',
};

const recieveSearchUniversityCreator = (university) => ({
  type: ActionType.RECEIVE_SEARCH_UNIVERSITY,
  payload: {
    university,
  },
});

const asyncSearchUniversity = (keyword) => async (dispatch) => {
  try {
    dispatch(setLoadingStatus(true));
    const university = await api.searchUniversity(keyword);
    dispatch(recieveSearchUniversityCreator(university));
  } catch (error) {
    dispatch(recieveSearchUniversityCreator([]));
    dispatch(setToastStatus(true));
    // dispatch(setToastMessage(error.message));
  } finally {
    dispatch(setLoadingStatus(false));
  }
};

export {
  ActionType,
  asyncSearchUniversity,
  recieveSearchUniversityCreator,
};
