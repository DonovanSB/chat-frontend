// @import dependencies
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import { StoreApp } from 'redux/reducers';
import { HOME_ROUTE } from 'config/globals';
// @end dependencies

// @import components
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AppLayout from 'components/layouts/AppLayout/AppLayout';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
// @end components

// @import types
// @end types

// @import services
// @end services

// @import hooks
import { useForm } from 'hooks/useForm';
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
export interface UseForm {
  firstName?: string;
  lastName?: string;
  username?: string;
  password?: string;
}

export const RegisterScreen = () => {
  const [role, setRole] = useState('student');
  const dispatch = useDispatch();
  const isAuth = useSelector((store: StoreApp) => store.auth.isLogged);

  // @INFO Services

  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value as string);
  };
  const [formValues, handleInputChange] = useForm<UseForm>({
    firstName: undefined,
    lastName: undefined,
    username: undefined,
    password: undefined,
  });

  const { firstName, lastName, username, password } = formValues;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch<any>(
      AuthActions.createAccountAction({
        firstName: firstName || '',
        lastName: lastName || '',
        username: username || '',
        password: password || '',
        role,
      })
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
            Registro
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  autoFocus
                  error={firstName !== undefined && firstName.length === 0}
                  onChange={handleInputChange}
                  helperText={
                    firstName !== undefined && firstName.length === 0
                      ? 'Campo requerido'
                      : ''
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Apellido"
                  name="lastName"
                  autoComplete="family-name"
                  error={lastName !== undefined && lastName.length === 0}
                  helperText={
                    lastName !== undefined && lastName.length === 0
                      ? 'Campo requerido'
                      : ''
                  }
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Nombre de usuario"
                  name="username"
                  error={username !== undefined && username.length === 0}
                  helperText={
                    username !== undefined && username.length === 0
                      ? 'Campo requerido'
                      : ''
                  }
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  error={password !== undefined && password.length === 0}
                  helperText={
                    password !== undefined && password.length === 0
                      ? 'Campo requerido'
                      : ''
                  }
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Role</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    label="Role"
                    onChange={handleChange}
                  >
                    <MenuItem value={'student'}>Estudiante</MenuItem>
                    <MenuItem value={'moderator'}>Moderador</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={!firstName || !lastName || !username || !password}
              sx={{ mt: 3, mb: 2 }}
            >
              Registrarse
            </Button>
            <Link href="/login" variant="body2">
              {'¿Ya tienes una cuenta? Inicia sesión'}
            </Link>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {isAuth && <Navigate to={HOME_ROUTE} />}
    </AppLayout>
  );
};

export default RegisterScreen;
