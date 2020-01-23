import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, Paper, Typography } from '@material-ui/core';
// import axios from 'axios';

const useStyles = makeStyles(theme => ({
  paperRoot: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  dividerRoot: { margin: theme.spacing(2) }
}));

const Manga = () => {
  const classes = useStyles();

  const handleQuery = async () => {
    const accessToken =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg5NWVjMzcxMjgxZTk4NzAxYTI5NGFhYjZmODY5ZDRhNTAyYzhhMDA3ZjZiNjExMjBkMTA1NTVlNDUzYTQ3ZDM1MDllYzNmNDA1NTUyZTVmIn0.eyJhdWQiOiIzMDU2IiwianRpIjoiODk1ZWMzNzEyODFlOTg3MDFhMjk0YWFiNmY4NjlkNGE1MDJjOGEwMDdmNmI2MTEyMGQxMDU1NWU0NTNhNDdkMzUwOWVjM2Y0MDU1NTJlNWYiLCJpYXQiOjE1Nzk3NTQyNjIsIm5iZiI6MTU3OTc1NDI2MiwiZXhwIjoxNjExMzc2NjYyLCJzdWIiOiIzOTI5NjUiLCJzY29wZXMiOltdfQ.mNdszNC5VE5K5WlO7xRDMzuDTkVaAmjg3N020y678MfUTO9XnIZFEQm2YK-hI5GXWniGFJlDD8uKC8pVyB4OijMHb1YGwAhgZFh7hHn3aFHamiUQcdxDHFHqJHWIHszFoJcT2yXJlFTh_y0eKKp5nFqLhJ2hVMfWEoWisnNVxGD3ZVs26KLvxjPQB7GrJEiG8nK1IKIffIQxRlVG319cgGPmMClUiUa-QmtPw_MV8gmcRFKvvNekjyiQCZQ9DeO0ZiRQcwvRdiRJn2V1ic-_PffVUaDHPZgCHHXQwfi6JFaVjW5nYmYR_8ujJj_isfUGlNDSoxeuHn_fRsk0k4mJ1mINcu-jq3VTqpLodNidVqgGPS_l59a4ZYbS6gPnpioblqv_td5dsXJSf_kdtYlYPgmHTCuteXe25ALpBB-z5EG0Y5g8maFlOyXXZIi-pcGKzMZ3rV3S9inoWlQ9hNcAiDcKMaUV8YqVyeKSOYz-4wN3SCxi_TUigZUodXB8NGims77kTAQca4I5gnpEdQmZ-c92XSdS5G2VEzImmuuYGbiS3GNwVlJBLrHp_hS6WHyCTixUdsSovU3x2gyFongMKk5BtcdlyQf-OAHIMNcU20PdOHWbl_D4gD3QshJ71OOKXp3aGcYJpKXlFFw-yVJQgf46nl1TL9SUPCg2GTS2RfI';
    const query = 'naruto';

    /*
    const url = 'https://graphql.anilist.co';
    const request = {
      url: url,
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + accessToken,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        query: query
      })
    };

    console.log('requesting...');
    console.log(request);

    try {
      const response = await axios(request);
      console.log(response);
    } catch (error) {
      console.error(error);
    }

    console.log('----');
    */

    const url = 'https://graphql.anilist.co';
    const options = {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + accessToken,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        query: query
      })
    };

    // fetch(url, options).then(handleResponse, handleError);
    fetch(url, options).then(handleResponse, handleError);

    function handleResponse(response) {
      console.log(response);
    }

    function handleError(error) {
      console.log(error);
    }
  };

  return (
    <Paper className={classes.paperRoot}>
      <Typography variant="h4">Manga</Typography>
      <Divider className={classes.dividerRoot} />
      <a href="https://anilist.co/api/v2/oauth/authorize?client_id=3056&redirect_uri=http://localhost:3000/manga&response_type=code">
        Login with AniList [Code]
      </a>
      <Divider className={classes.dividerRoot} />
      <a href="https://anilist.co/api/v2/oauth/authorize?client_id=3056&response_type=token">
        Login with AniList [Token]
      </a>
      <Divider className={classes.dividerRoot} />
      <Button color="primary" onClick={() => handleQuery()} variant="contained">
        Test Query
      </Button>
    </Paper>
  );
};
export default Manga;
