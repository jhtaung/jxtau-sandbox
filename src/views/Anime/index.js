import React from 'react';
import {
  Divider,
  IconButton,
  InputBase,
  Paper,
  Typography
} from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import useAnime from './useAnime';

const useStyles = makeStyles(theme => ({
  paperRoot: { padding: theme.spacing(2), marginTop: theme.spacing(2) },
  dividerRoot: { margin: theme.spacing(2) },
  textFieldRoot: { height: '10px' },
  root: {
    alignItems: 'center',
    display: 'flex',
    marginTop: theme.spacing(2),
    padding: '2px 4px',
    width: 400
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

const Anime = () => {
  const classes = useStyles();
  const { doAniQuery } = useAnime();

  // TODO reducer, context
  const [state, setState] = React.useState({ search: '', result: [] });

  const handleChange = (e, key) => {
    e.preventDefault();
    setState({ ...state, [key]: e.target.value });
  };

  const handleQuery = async e => {
    e.preventDefault();
    const result = await doAniQuery(state.search);
    if (result.success) {
      setState({ ...state, result: result.response.data.data.Page.media });
    }
  };

  return (
    <form onSubmit={handleQuery}>
      <Paper className={classes.paperRoot}>
        <Typography variant="h4">Manga</Typography>
        <Divider className={classes.dividerRoot} />
        <ul>
          <li>Show Top 5 Anime / Show List of Anime</li>
          <li>
            columns: Name, release date, seasons/episodes release dates for
            latest anime and manga,
          </li>
        </ul>
      </Paper>
      <Paper className={classes.root} component="form">
        <InputBase
          className={classes.input}
          onChange={e => handleChange(e, 'search')}
          placeholder="Search Anime" />
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          aria-label="search"
          className={classes.iconButton}
          type="submit">
          <SearchIcon />
        </IconButton>
      </Paper>
      <Paper className={classes.paperRoot}>
        {state.result.map((value, index) => (
          <p key={index}>{index} . {value.title.english}</p>
        ))}
      </Paper>
    </form>
  );
};
export default Anime;
