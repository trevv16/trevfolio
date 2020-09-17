import React, { Component } from 'react';

import {
  CssBaseline,
  Container,
  Link,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
// import {} from '@material-ui/icons';
// import api from '../../utils/api';
import {
  Introduction,
  Jumbotron,
  RecentProjects,
  MainSkills,
  MailingList,
  Navigation,
  Footer
} from '../../components/index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  }
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navigation />
      <Grid container xs={12} spacing={1} className={classes.main}>
        <Grid item xs={12}>
          <Jumbotron />
        </Grid>
        <Grid item xs={12}>
          <Introduction />
        </Grid>
        <Grid item xs={12}>
          <MainSkills />
        </Grid>
        <Grid item xs={12}>
          <RecentProjects />
        </Grid>
      </Grid>
      <MailingList />
      <Footer />
    </div>
  );
}

export default Home;
