import { Navigate } from 'react-router';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/LoginPage/Login';

export interface IRoute {
  path: string;
  element: React.ReactNode;
}

export enum RouteNames {
  LOGIN = '/login',
  DASHBOARD = '/',
  ERROR = '/*',
}

//User not logged in
export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, element: <Login /> },
  { path: RouteNames.ERROR, element: <Navigate to='/login' /> },
];

//User logged in
export const privateRoutes: IRoute[] = [
  { path: RouteNames.DASHBOARD, element: <Dashboard /> },
  { path: RouteNames.ERROR, element: <Navigate to='/' /> },
];
