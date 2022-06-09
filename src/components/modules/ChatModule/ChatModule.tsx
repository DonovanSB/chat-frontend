// @import dependencies
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { StoreApp } from 'redux/reducers';
import { nanoid } from 'nanoid';
// @end dependencies

// @import components
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ListItemText, Grid, Box, Typography } from '@mui/material';
import { Paper } from '@mui/material';
// @end components

// @import types
import * as MessageTypes from 'types/message/message.types';
// @end types

// @import services
import MessageService from 'services/message/message.service';
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

export const ChatModule = () => {
  const [messages, setMessages] = useState<MessageTypes.Message[]>([]);
  const boxChatRef = useRef<HTMLInputElement>(null);

  const userDB = useSelector((store: StoreApp) => store.auth.user);

  // @INFO Services
  const messageService = new MessageService();
  const socketService = new SocketService();

  useEffect(() => {
    getMessages();
    socketService.listenEvent('message', handleMessages);

    return () => {
      socketService.removeListenEvent('message', handleMessages);
    };
  }, []);

  const handleMessages = (message: MessageTypes.Message) => {
    setMessages((prevState) => [...prevState, message]);
    scrollToEnd();
  };

  const scrollToEnd = () => {
    setTimeout(() => {
      boxChatRef?.current?.scrollIntoView({
        behavior: 'smooth',
      });
    }, 500);
  };

  const getMessages = async () => {
    const messages = await messageService.getByRoom('curso1');
    setMessages(messages);
    scrollToEnd();
  };

  return (
    <Container component="main">
      <CssBaseline />
      <Typography variant="h6" component="h6">
        Chat
      </Typography>
      <Paper style={{ maxHeight: 400, overflow: 'auto' }} ref={boxChatRef}>
        <Grid container mb={2}>
          {messages.map((message, index) => (
            <Grid
              ref={index === messages.length - 1 ? boxChatRef : null}
              container
              direction="column"
              justifyContent="flex-start"
              alignItems={
                message.user._id === userDB?._id ? 'flex-end' : 'flex-start'
              }
              key={nanoid()}
            >
              <Box
                sx={{
                  bgcolor:
                    message.user._id === userDB?._id
                      ? 'primary.main'
                      : 'grey.500',
                  color: 'white',
                  borderRadius: '1rem',
                  paddingLeft: 2,
                  paddingRight: 2,
                  margin:
                    message.user._id === userDB?._id
                      ? '10px 0 0 15px'
                      : '10px 15px 0 0',
                }}
              >
                {message.user._id !== userDB?._id && (
                  <Typography
                    component="h1"
                    variant="body1"
                    color="var(--primary)"
                  >
                    {message.user.firstName} {message.user.lastName}
                    {message.user.role === 'moderator' && ' - Moderador'}
                  </Typography>
                )}
                <ListItemText primary={message.message} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default ChatModule;
