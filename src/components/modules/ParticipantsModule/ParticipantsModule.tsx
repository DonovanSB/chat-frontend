// @import dependencies
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
} from '@mui/material';
// @end dependencies

export const ParticipantsModule = () => {
  const users = [
    {
      id: 1,
      name: 'Juan',
      lastName: 'Perez',
    },
    {
      id: 2,
      name: 'David',
      lastName: 'Perez',
    },
    {
      id: 3,
      name: 'Carlos',
      lastName: 'Perez',
    },
    {
      id: 4,
      name: 'Jose',
      lastName: 'Perez',
    },
  ];
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <List component="nav" aria-label="mailbox folders">
        {users.map((user) => (
          <div key={user.id}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  {user.name.charAt(0)}
                  {user.lastName.charAt(0)}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={`${user.name} ${user.lastName}`} />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </Container>
  );
};

export default ParticipantsModule;
