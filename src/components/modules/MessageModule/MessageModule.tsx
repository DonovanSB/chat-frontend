// @import dependencies
import { useState } from 'react';
import { Grid } from '@mui/material';
import { StoreApp } from 'redux/reducers';
import { useSelector } from 'react-redux';
// @end dependencies

// @import components
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
// @end components

// @import types
// @end types

// @import services
import SocketService from 'services/socket/socket.service';
// @end services

// @import hooks
// @end hooks

// @import actions
// @end actions

// @import utils
// @end utils

// @import assets
// @end assets

// @import styles
// @end styles

export const MessageModule = () => {
  const [message, setMessage] = useState('');
  const userDB = useSelector((store: StoreApp) => store.auth.user);
  const socketService = new SocketService();

  const handleSend = async () => {
    socketService.emitEvent('message', {
      user: userDB?._id,
      room: 'curso1',
      message,
    });
    setMessage('');
  };
  return (
    <Container component="main">
      <CssBaseline />
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs>
          <TextField
            margin="normal"
            required
            fullWidth
            id="message"
            name="message"
            autoFocus
            placeholder="Escriba un mensaje aquí"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Grid>
        <Grid item>
          <IconButton onClick={handleSend}>
            <SendIcon color="primary" />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MessageModule;
