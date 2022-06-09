// @import dependencies
import { useDispatch, useSelector } from 'react-redux';
import { StoreApp } from 'redux/reducers';
import { Navigate } from 'react-router-dom';
import { HOME_ROUTE } from 'config/globals';
// @end dependencies

// @import components
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AppLayout from 'components/layouts/AppLayout/AppLayout';
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

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © Donovan Burbano '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export const LoginScreen = () => {
  // @INFO Services

  const dispatch = useDispatch();
  const isAuth = useSelector((store: StoreApp) => store.auth.isLogged);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch<any>(
      AuthActions.loginAction(
        data.get('username')?.toString() || '',
        data.get('password')?.toString() || ''
      )
    );
  };

  return (
    <AppLayout>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Inicio de sesión
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Nombre de usuario"
              name="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Iniciar sesión
            </Button>
            <Link href="/register" variant="body2">
              {'¿No tienes una cuenta? Registrate'}
            </Link>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      {isAuth && <Navigate to={HOME_ROUTE} />}
    </AppLayout>
  );
};

export default LoginScreen;
