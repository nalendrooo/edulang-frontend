import api from '../../config/services/api';
import { setLoadingStatus } from '../loading/action';
import { setToastStatus } from '../toast/action';

const ActionType = {
  RECEIVE_ANSWER: 'RECEIVE_ANSWER',
};

const recieveAnswerCreator = (answer) => ({
  type: ActionType.RECEIVE_ANSWER,
  payload: {
    answer,
  },
});

const asyncGetAnswer = (idQuestion) => async (dispatch) => {
  try {
    dispatch(setLoadingStatus(true));
    const answer = await api.getAnswer(idQuestion);
    dispatch(recieveAnswerCreator(answer));
  } catch (error) {
    dispatch(recieveAnswerCreator({}));
    dispatch(setToastStatus(true));
  } finally {
    dispatch(setLoadingStatus(false));
  }
};

export {
  ActionType,
  asyncGetAnswer,
  recieveAnswerCreator,
};
