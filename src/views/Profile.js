import React from 'react';
import {
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  IconButton,
  Grid,
  TextField
} from '@material-ui/core';
import {
  Message as MessageIcon,
  MoreVert as MoreVertIcon,
  PersonAdd as PersonAddIcon
} from '@material-ui/icons';

const Profile = () => {
  return (
    <Container maxWidth="lg">
      <Grid alignItems="center" container spacing={2}>
        <Grid item>
          Web Developer <br/>
          John Doe
        </Grid>
        <Grid item style={{ flexGrow: 1 }} />
        <Grid item>
          <Button color="primary" startIcon={<MessageIcon />} variant="contained">
            Send Message
          </Button>
        </Grid>
        <Grid item>
          <Button color="primary" startIcon={<PersonAddIcon />} variant="contained">
            Add Connection
          </Button>
        </Grid>
        <Grid item>
          <IconButton aria-label="More Options"><MoreVertIcon /></IconButton>
        </Grid>
      </Grid>
      <Divider style={{ margin: '20px' }} />
      <Card>
        <CardContent>
          <TextField fullWidth label="What's on your mind?" variant="outlined" />
        </CardContent>
      </Card>
      <Divider style={{ margin: '20px' }} />
    </Container>
  );
};

export default Profile;
