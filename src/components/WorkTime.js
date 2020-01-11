import React, { useEffect, useState } from 'react';
import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { add, format } from 'date-fns';

const useStyles = makeStyles(() => ({ root: { padding: '20px' } }));

const WorkTime = props => {
  const { ...rest } = props;
  const classes = useStyles();
  const [state, setState] = useState({
    start: '07:30',
    startTime: '',
    endTime: '',
    timeLeft: ''
  });
  const handleChange = newState => setState({ ...state, ...newState });
  const calcTime = () => {
    const today = format(new Date(), 'MM-dd-yyyy');
    const start = new Date(today + ' ' + state.start);
    const end = add(start, { hours: 9, minutes: 30 });
    handleChange({
      startTime: format(start, 'hh:mm aa'),
      endTime: format(end, 'hh:mm aa')
    });
  };
  // eslint-disable-next-line
  useEffect(() => calcTime(), []);
  useEffect(() => {
    const resetTime = () => {
      const today = format(new Date(), 'MM-dd-yyyy');
      const start = new Date(today + ' ' + state.start);
      const end = add(start, { hours: 9, minutes: 30 });

      let d = new Date();
      let time = Math.abs(end.getTime() - d.getTime());
      let hours = Math.floor(time / 1000 / 60 / 60);
      time -= hours * 1000 * 60 * 60;
      let minutes = Math.floor(time / 1000 / 60);
      time -= minutes * 1000 * 60;
      let seconds = Math.floor(time / 1000);
      const timeLeft = hours + ':' + minutes + ':' + seconds;

      setState({ ...state, timeLeft: timeLeft });
    };

    let interval = setInterval(() => resetTime(), 1000);
    return () => clearInterval(interval);
  }, [state]);

  return (
    <Paper className={classes.root} {...rest}>
      <Grid container spacing={3}>
        <Grid item lg={2} md={4} sm={6} xl={2} xs={12}>
          <TextField
            label="Start Time"
            onChange={e => handleChange({ start: e.target.value })}
            style={{ marginRight: '20px' }}
            value={state.start}
            variant="outlined"
          />
        </Grid>
        <Grid item lg={1} md={2} sm={6} xl={1} xs={12}>
          <Button
            color="primary"
            label="Enter"
            onClick={() => calcTime()}
            variant="contained">
            Enter
          </Button>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xl={3} xs={12}>
          <Table size="small">
            <TableBody>
              <TableRow>
                <TableCell>Start Time:</TableCell>
                <TableCell>{state.startTime}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>End Time:</TableCell>
                <TableCell>{state.endTime}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Time Left:</TableCell>
                <TableCell>{state.timeLeft}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default WorkTime;
