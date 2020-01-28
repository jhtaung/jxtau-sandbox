import React from 'react';
import {
  Button,
  Divider,
  Grid,
  Link,
  Paper,
  TextField,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: { padding: theme.spacing(2) },
  row: { marginBottom: theme.spacing(1) }
}));

const Login = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center" spacing={3}>
      <Grid item lg={8} md={8} sm={12} xl={4} xs={12}>
        <Paper className={classes.root}>
          <Typography className={classes.row} variant="h5">Sign in </Typography>
          <Typography className={classes.row} variant="subtitle1">Sign in on the internal platform</Typography>
          <TextField className={classes.row} fullWidth label="Email Address" variant="outlined" />
          <TextField className={classes.row} fullWidth label="Password" type="password" variant="outlined" />
          <Button color="primary" fullWidth variant="contained">
            SIGN IN
          </Button>
          <Divider style={{ margin: '20px 0px' }} />
          <Link href="/register">Don't have an account?</Link>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
