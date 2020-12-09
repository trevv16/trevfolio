import React from 'react';

import { CssBaseline, Grid, makeStyles } from '@material-ui/core';
// import {} from '@material-ui/icons';
// import api from '../../utils/api';
import {
  Introduction,
  Jumbotron,
  MainSkills,
  ProjectHighlight,
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

const projectData = [
  {
    _id: '1',
    title: 'Calculator',
    description: 'This is a website showing some basic js and design skills.',
    thumbnail: 'https://source.unsplash.com/random/550x500',
    published: 'Apr 30 2019'
  },
  {
    _id: '2',
    title: 'Clock',
    description: 'This is a website showing some basic js and design skills.',
    thumbnail: 'https://source.unsplash.com/random/550x500',
    published: 'May 04 2019'
  },
  {
    _id: '3',
    title: 'Weather',
    description: 'This is a website showing some basic js and design skills.',
    thumbnail: 'https://source.unsplash.com/random/550x500',
    published: 'Sep 01 2019'
  }
];

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
        <Grid item xs={12}>
          <ProjectHighlight projects={projectData} />
        </Grid>
      </Grid>
      <MailingList />
      <Footer />
    </div>
  );
}

export default Home;
