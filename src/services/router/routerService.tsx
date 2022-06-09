import { Route, Navigate } from 'react-router-dom';
import { IRouteApp } from 'types/routes/routes.types';
import AuthService from 'services/auth/auth.service';
import NotFoundPage from 'components/screens/NotFoundScreen/NotFoundScreen';
import { HOME_ROUTE } from 'config/globals';

// type ITypeRoutes = '/' | '/profile' | '/home';

class RouterService {
  private authService = new AuthService();

  /**
   * @INFO Renderizar una ruta
   * @param _route
   */
  public renderRoute = (_route: IRouteApp) => {
    if (_route.private) {
      if (this.authService.isLogin()) {
        return <Route path={_route.path} element={_route.component} />;
      } else if (window.location.pathname.includes(_route.path)) {
        if (this.authService.isLogin()) {
          console.log('Redirect to home');
          return (
            <Route path={'*'} element={<Navigate to={HOME_ROUTE} replace />} />
          );
        } else {
          return (
            <Route path={'*'} element={<Navigate to={'/login'} replace />} />
          );
        }
      } else {
        return <Route path={_route.path} element={<NotFoundPage />} />;
      }
    } else {
      return <Route path={_route.path} element={_route.component} />;
    }
  };
}

export default RouterService;
