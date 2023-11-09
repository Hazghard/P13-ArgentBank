import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthenticationSelectors from '@/Store/Authentication/selectors';

import { Home, Login, Dashboard, Error } from './index';

const PublicRouter = () => {
  const token = useSelector(AuthenticationSelectors.token);

  return (
    <Routes>
      <Route index element={<Navigate to="/home" />} />

      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<Login />} />

      <Route
        path='/profile'
        element={token ? <Dashboard /> : <Navigate to="/login" />}
      />

      <Route path='*' element={<Error />} />
    </Routes>
  );
};

export default PublicRouter;
