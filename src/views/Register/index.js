import React from 'react';
import {
  Button,
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Link,
  TextField,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: { padding: theme.spacing(2) },
  row: { marginBottom: theme.spacing(1) },
  divider: { margin: '20px 0px' }
}));

const Register = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center" spacing={3}>
      <Grid item lg={8} md={8} sm={12} xl={4} xs={12}>
        <Card>
          <CardContent>
            <Typography className={classes.row} variant="h5">
              Sign up
            </Typography>
            <Typography className={classes.row} variant="subtitle1">
              Sign up on the internal platform
            </Typography>
            <TextField className={classes.row} fullWidth label="First Name" variant="outlined" />
            <TextField className={classes.row} fullWidth label="Last Name" variant="outlined" />
            <TextField className={classes.row} fullWidth label="Email Address" variant="outlined" />
            <TextField className={classes.row} fullWidth label="Password" type="password" variant="outlined" />
            <FormControl className={classes.row} component="fieldset" required>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="I have read the Terms and Condition."
                />
              </FormGroup>
            </FormControl>
            <Button color="primary" fullWidth variant="contained">
              Create Account
            </Button>
            <Divider className={classes.divider} />
            <Link href="/login" >
              Have an account?
            </Link>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Register;
