// @import dependencies
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StoreApp } from 'redux/reducers';
// @end dependencies

// @import components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
// @end components

// @import types
// @end types

// @import services
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
// @end styles

export interface HeaderModuleProps {
  title?: string;
}

const HeaderModule: React.FC<HeaderModuleProps> = (props) => {
  const isAuth = useSelector((store: StoreApp) => store.auth.isLogged);
  const dispatch = useDispatch();

  const handleClickLogout = () => {
    dispatch<any>(AuthActions.logoutAction());
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default" style={{ zIndex: 10 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.title ? props.title : 'Chat App'}
          </Typography>
          {!isAuth && (
            <Link to={'/login'} style={{ textDecoration: 'none' }}>
              <Box mr={1}>
                <Button variant="outlined">Iniciar sesión</Button>
              </Box>
            </Link>
          )}
          {!isAuth && (
            <Link to={'/register'} style={{ textDecoration: 'none' }}>
              <Button variant="outlined">Registro</Button>
            </Link>
          )}

          {isAuth && (
            <IconButton onClick={handleClickLogout}>
              <LogoutIcon color="primary" />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderModule;
