import React, { useEffect } from 'react';
import LoginView from './login.view';
import { clearData } from '../../utils/helper';

export const LoginContainer = () => {
  useEffect(() => {
    clearData();
  });

  return <LoginView />;
};
