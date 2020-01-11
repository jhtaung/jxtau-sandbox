import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, Paper, Typography } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  paperRoot: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  dividerRoot: { margin: theme.spacing(2) }
}));

const Manga = () => {
  const classes = useStyles();
  // const [state, setState] = useState({ result: '', screen: '' });

  /*
  var request = require('request');
  var options = {
    uri: 'https://anilist.co/api/v2/oauth/token',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    json: {
      'grant_type': 'authorization_code',
      'client_id': '{client_id}',
      'client_secret': '{client_secret}',
      'redirect_uri': '{redirect_uri}', // http://example.com/callback
      'code': '{code}', // The Authorization Code received previously
    }
  };
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body.access_token);
    }
  });
  */

  const handleRequestToken = async () => {
    const clientID = '3056';
    const clientSecret = 'S6ewA9HevgQ5BUtc0bDtFQiBbZ6yUj5v1e3ScTaq';
    const redirectURL = 'http://localhost:3000/manga';
    const authCode = 'def5020087f4b56e2d1327d33f10a5dcf28cc3f2daf1c' +
      '25985279eecb68a79d31e079eab34aaa524930b659c9f39048c069104634b' +
      '25c2a6f517a6e5446f4276e9d43f4c2baa965e7188477f65314789f7a8835' +
      'b3630be69fde684d71c1752e5852c102ae257af83d6e100f4a6c532d5dacb' +
      'bd5a2ea2331a5be9f1ec2d6b9209b2a04ed4590960046ba5b9f063096a276' +
      '38e0fcfc824603991ab6dafaece345b8357ed38bda4d4ed862bf6cb24ee24' +
      '958d51acc2ed580d39ec25cdc77a50dc87b0f475eb91726cc9ec6b2f4e2ea' +
      'a942d2ff1c5717790c4d6615918cde965086178d5cd43e0ae31de046558be' +
      '033b033e9690b29cbfe4a841ef56fc9fd160ae33ddf12960b9267165ca4f3' +
      'ab058417ae1e6fca8a6d43d9e0efacac5e65722cad8ba9a888011d45e0337' +
      'f5ce4731a817e73f7cbe20d4c12186c7a33169cb95a96ea5ebe445108e6aa' +
      '9c3be1315d7e0e02e665c7ab726e8a25697b17c7fc9e9eaf85b64ba58aa';
    const request = {
      url: 'https://anilist.co/api/v2/oauth/token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      json: {
        'grant_type': 'authorization_code',
        'client_id': clientID,
        'client_secret': clientSecret,
        'redirect_uri': redirectURL, // http://example.com/callback
        'code': authCode, // The Authorization Code received previously
      }
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
  };

  return (
    <Paper className={classes.paperRoot}>
      <Typography variant="h4">
        Manga
      </Typography>
      <Divider className={classes.dividerRoot} />
      <a href="https://anilist.co/api/v2/oauth/authorize?client_id=3056&redirect_uri=http://localhost:3000/manga&response_type=code">
        Login with AniList
      </a>
      <Divider className={classes.dividerRoot} />
      <Button color="primary" onClick={() => handleRequestToken()} variant="contained">
        Request Token
      </Button>
    </Paper>
  );
};
export default Manga;
