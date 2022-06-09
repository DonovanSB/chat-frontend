// @import dependencies
// @end dependencies

// @import components
import AppLayout from 'components/layouts/AppLayout/AppLayout';
import MessageModule from 'components/modules/MessageModule/MessageModule';
import ChatModule from 'components/modules/ChatModule/ChatModule';
import { Card, CardContent, Grid } from '@mui/material';
import VideoComponent from 'components/common/VideoComponent/VideoComponent';
// @end components

// @import types
// @end types

// @import services
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

export const HomeScreen = () => {
  return (
    <AppLayout title="Curso virtual 1">
      <Grid
        container
        justifyContent={'center'}
        alignItems="center"
        mt={3}
        spacing={3}
      >
        <VideoComponent id="muVni-IRHgw" platform="YouTube" />
        <Grid item xs={6} mb={3}>
          <Card elevation={5} style={{ borderRadius: 20 }}>
            <CardContent>
              <ChatModule />
              <MessageModule />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </AppLayout>
  );
};

export default HomeScreen;
