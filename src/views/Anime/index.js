import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, Paper, Typography } from '@material-ui/core';
import useAnime from './useAnime';

const useStyles = makeStyles(theme => ({
  paperRoot: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  dividerRoot: { margin: theme.spacing(2) }
}));

const Anime = () => {
  const classes = useStyles();
  const { handleAniQuery } = useAnime();
  return (
    <Paper className={classes.paperRoot}>
      <Typography variant="h4">Manga</Typography>
      <Divider className={classes.dividerRoot} />
      <Button color="primary" onClick={() => handleAniQuery()} variant="contained">
        Anilist Query
      </Button>
      <Divider className={classes.dividerRoot} />
      <ul>
        <li>Show Top 5 Anime / Show List of Anime</li>
        <li>
          columns: Name, release date, seasons/episodes
          release dates for latest anime and manga,
        </li>
      </ul>
    </Paper>
  );
};
export default Anime;
