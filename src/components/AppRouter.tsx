import { Route, Routes } from 'react-router';
import { useAppSelector } from '../hooks/hooks';
import App from '../App';
import { privateRoutes, publicRoutes } from '../routes/index';

const AppRouter = () => {
  const { isAuth } = useAppSelector((state) => state.user);
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => {
        return <Route key={route.path} {...route} />;
      })}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => {
        return <Route key={route.path} {...route} />;
      })}
    </Routes>
  );
};

export default AppRouter;
