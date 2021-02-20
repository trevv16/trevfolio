import React from 'react';

import { CssBaseline, Grid, makeStyles } from '@material-ui/core';
import {
  Introduction,
  Jumbotron,
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
      <Grid container spacing={1} className={classes.main}>
        <Grid item xs={12}>
          <Jumbotron />
        </Grid>
        <Grid item xs={12}>
          <Introduction />
        </Grid>
        <Grid item xs={12}>
          <MainSkills />
        </Grid>
      </Grid>
      <MailingList />
      <Footer />
    </div>
  );
}

export default Home;
