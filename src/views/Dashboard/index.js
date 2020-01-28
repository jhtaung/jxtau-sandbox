import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { Avatar, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { AttachMoney as AttachMoneyIcon } from '@material-ui/icons';

import WorkTime from '../../components/WorkTime';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.white,
    color: theme.palette.black
  },
  avatar: {
    height: 56,
    width: 56,
    color: theme.palette.white,
    backgroundColor: green[500]
  },
  card: { minWidth: 275 },
  content: { alignItems: 'center', display: 'flex' },
  bullet: { display: 'inline-block', margin: '0 2px', transform: 'scale(0.8)' },
  icon: { height: 32, width: 32 },
  pos: { marginBottom: 12 },
  title: { fontSize: 14, fontWeight: 'bold' }
}));

const Dashboard = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={3}>
        {['BUDGET', 'ROI', 'DEBT', 'TOTAL'].map(title => (
          <Grid item key={title} lg={3} md={6} sm={6} xl={3} xs={12}>
            <Card {...rest} className={clsx(classes.root, className)}>
              <CardContent>
                <Grid container justify="space-between">
                  <Grid item>
                    <Typography className={classes.title} gutterBottom>
                      {title}
                    </Typography>
                    <Typography component="h2" variant="h5">
                      24,000
                    </Typography>
                    <Typography component="p" variant="body2">
                      12% Since Last Month
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Avatar className={classes.avatar}>
                      <AttachMoneyIcon className={classes.icon} />
                    </Avatar>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <WorkTime style={{ marginTop: '20px' }} />
    </>
  );
};

Dashboard.propTypes = {
  className: PropTypes.string
};

export default Dashboard;
