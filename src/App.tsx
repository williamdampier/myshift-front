import { FC } from 'react';

import './App.css';

import { RootState } from './store/index';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { loginUser, logoutUser } from './store/feature/userSlice';
import AppRouter from './app/providers/AppRouter/AppRouter';

const App: FC = () => {
  const { isAuth } = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  const changeAuth = () => {
    isAuth ? dispatch(logoutUser()) : dispatch(loginUser());
  };
  return (
    <div className='App'>
      <AppRouter />
      {isAuth ? 'true' : 'false'}
      <button onClick={changeAuth}> chanage auth</button>
    </div>
  );
};

export default App;
