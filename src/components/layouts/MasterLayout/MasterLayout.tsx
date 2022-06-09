// @import dependencies
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreApp } from 'redux/reducers/index';
import { ToastContainer } from 'react-toastify';
import { routesApp } from 'routes/routes';
// @end dependencies

// @import components
import LoadingScreen from 'components/screens/LoadingScreen/LoadingScreen';
// @end components

// @import types
// @end types

// @import services
import AuthService from 'services/auth/auth.service';
import RouterService from 'services/router/routerService';
// @end services

// @import hooks
// @end hooks

// @import actions
import * as AuthActions from 'redux/reducers/auth/auth.actions';
// @end actions

// @import utils
// @end utils

// @import assets
// @end assets

// @import styles
import 'react-toastify/dist/ReactToastify.css';
// @end styles

export interface MasterLayoutProps {}

const MasterLayout: React.FC<MasterLayoutProps> = (props) => {
  const hasData = useSelector((store: StoreApp) => store.auth.hasData);
  const dispatch = useDispatch();

  const authService = new AuthService();
  const routerService = new RouterService();
  useEffect(() => {
    const token = authService.getToken();
    if (token && !hasData) {
      // @INFO Si hay token y no hay data hago el login con token
      dispatch<any>(AuthActions.loginByTokenAction({ token: String(token) }));
    }
  }, []);

  return (
    <div className="master_layout-layout">
      {authService.getToken() && !hasData ? (
        <LoadingScreen />
      ) : (
        <>
          <Router>
            <Routes>
              {routesApp.map((itemRoute) =>
                routerService.renderRoute(itemRoute)
              )}
            </Routes>
          </Router>
          <ToastContainer />
        </>
      )}
    </div>
  );
};

export default MasterLayout;
