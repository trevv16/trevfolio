import React from 'react';
import { Helmet } from 'react-helmet';
import { CssBaseline, Grid, makeStyles, Typography } from '@material-ui/core';
// import {} from '@material-ui/icons';
// import api from '../../utils/api';
import {
  MailingList,
  Navigation,
  Footer
  // ProjectCard
} from '../../components/index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  main: {
    marginTop: theme.spacing(18),
    marginBottom: theme.spacing(2)
  }
}));

function Project() {
  const classes = useStyles();
  // const projectData = [
  //   {
  //     _id: '1',
  //     title: 'Calculator',
  //     description: 'This is a website showing some basic js and design skills.',
  //     thumbnail: 'https://source.unsplash.com/random/550x500',
  //     published: 'Apr 30 2019'
  //   },
  //   {
  //     _id: '2',
  //     title: 'Clock',
  //     description: 'This is a website showing some basic js and design skills.',
  //     thumbnail: 'https://source.unsplash.com/random/550x500',
  //     published: 'May 04 2019'
  //   },
  //   {
  //     _id: '3',
  //     title: 'Weather',
  //     description: 'This is a website showing some basic js and design skills.',
  //     thumbnail: 'https://source.unsplash.com/random/550x500',
  //     published: 'Sep 01 2019'
  //   }
  // ];

  return (
    <div className={classes.root}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Projects | Trevor's Portfolio</title>
      </Helmet>
      <CssBaseline />
      <Navigation />
      <Grid container spacing={1} className={classes.main}>
        <Grid item xs={12}>
          <Typography
            align='center'
            variant='h1'
            component='h1'
            color='palette.primary.dark'
          >
            Projects
          </Typography>
        </Grid>
        {/* {projectData.map((proj, i) => {
          return (
            <Grid item xs={12}>
              <ProjectCard />
            </Grid>
          );
        })} */}
      </Grid>
      <MailingList />
      <Footer />
    </div>
  );
}

export default Project;
