import { configureStore } from '@reduxjs/toolkit';
import universityReducer from './university/reducer';
import toastReducer from './toast/reducer';
import authUserReducer from './auth/reducer';
import messageReducer from './message/reducer';
import questionReducer from './recomendation/reducer';
import answerReducer from './answer/reducer';
import loadingReducer from './loading/reducer';

const store = configureStore({
  reducer: {
    university: universityReducer,
    toast: toastReducer,
    authuser: authUserReducer,
    message: messageReducer,
    question: questionReducer,
    answer: answerReducer,
    isLoading: loadingReducer,
  },
});

export default store;
