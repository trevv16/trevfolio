import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { CssBaseline, Grid, makeStyles } from '@material-ui/core';
import { Navigation, Footer } from '../../components/index';
import Auth from '../../Auth';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  main: {
    marginTop: theme.spacing(18),
    marginBottom: theme.spacing(2)
  }
}));

function Dashboard(props) {
  const [error, setError] = useState('');
  const [privateData, setPrivateData] = useState('');
  const classes = useStyles();

  useEffect(() => {
    if (!Auth.getToken()) {
      props.history.push('/admin');
    }

    const fetchPrivateData = async () => {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Auth.getToken()}`
        }
      };

      try {
        const { data } = await axios.get('/api/v1/users', config);
        setPrivateData(data.data);
      } catch (err) {
        Auth.deauthenticateUser();
        setError('Not Authorized, Please Sign In');
      }
    };

    fetchPrivateData();
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navigation />
      <Grid container spacing={1} className={classes.main}>
        <Grid item xs={12}>
          {error && <span>{error}</span>}
        </Grid>
        <Grid item xs={12}>
          {privateData}
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default Dashboard;
