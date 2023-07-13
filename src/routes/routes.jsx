import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import HomePage from '../pages/HomePage';
import Answer from '../pages/AnswerPage';
import SearchUniversityPage from '../pages/SearchUniversityPage';
import Recomendation from '../pages/RecomendationPage';
import ProfilePage from '../pages/ProfilePage';

const router = createBrowserRouter([
  {
    path: '/',
    // element: <div>Hello word</div>,
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  // {
  //   path: '/home',
  // },
  {
    path: '/recomendation',
    element: <Recomendation />,
  },
  {
    path: '/recomendation/:idQuestion',
    element: <Answer />,
  },
  {
    path: '/search/university',
    element: <SearchUniversityPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
]);

export default router;
