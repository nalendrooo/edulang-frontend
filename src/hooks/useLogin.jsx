import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../config/services/api';

const useLogin = () => {
  const [isLogin, setIsLogin] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.getAuthToken();
        api.putAccessToken(data.accessToken);
        setIsLogin(data);
      } catch (error) {
        if (location.pathname !== '/login' && location.pathname !== '/register') {
          navigate('/login');
        }
      }
    };

    fetchData();
  }, []);

  return isLogin;
};

export default useLogin;
