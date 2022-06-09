import { IRouteApp } from 'types/routes/routes.types';

// @import Screens
import LoginScreen from '../components/screens/LoginScreen/LoginScreen';
import RegisterScreen from '../components/screens/RegisterScreen/RegisterScreen';
import HomeScreen from '../components/screens/HomeScreen/HomeScreen';
// @end

export const routesApp: IRouteApp[] = [
  {
    component: <LoginScreen />,
    path: '/login',
  },
  {
    component: <RegisterScreen />,
    path: '/register',
  },
  {
    component: <HomeScreen />,
    path: '/',
    private: true,
  },
];
