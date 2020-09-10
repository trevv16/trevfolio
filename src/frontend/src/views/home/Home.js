import React, { Component } from 'react';

import {
  CssBaseline,
  Container,
  Link,
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
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800]
  }
}));

function Home() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Navigation />
      <Jumbotron />
      <Introduction />
      <MainSkills />
      <RecentProjects />
      <MailingList />
      <Footer />
    </div>
  );
}

export default Home;
