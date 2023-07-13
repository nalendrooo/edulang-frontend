import api from '../../config/services/api';
import { setLoadingStatus } from '../loading/action';

const ActionType = {
  SET_RECOMENDATION: 'SET_RECOMENDATION',
};

const newRecomendationCreator = (question) => ({
  type: ActionType.SET_RECOMENDATION,
  payload: {
    question,
  },
});

const asyncNewRecomendation = (question) => async (dispatch) => {
  try {
    dispatch(setLoadingStatus(true));
    const newQuestion = await api.sendQuestion(question);
    dispatch(newRecomendationCreator(newQuestion));

    return newQuestion;
  } catch (error) {
    return Promise.reject(error);
  } finally {
    dispatch(setLoadingStatus(false));
  }
};

export {
  ActionType,
  newRecomendationCreator,
  asyncNewRecomendation,
};
