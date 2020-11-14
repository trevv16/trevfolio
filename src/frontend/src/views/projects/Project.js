import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { CssBaseline, Grid, makeStyles, Typography } from '@material-ui/core';
import _ from 'underscore';
import api from '../../utils/api';
import {
  MailingList,
  Navigation,
  Footer,
  ProjectCard
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

export default function Project(props) {
  const fetchProjects = () => {
    return Promise.resolve(
      api
        .fetch(`v1/projects`)
        .then((response) => {
          return _.first(response.data, 4);
        })
        .catch((err) => {
          console.log(err);
        })
    );
  };
  const classes = useStyles();
  const [projects, handleProjects] = useState([]);
  // console.log('Projects: ', projectData);

  useEffect(() => {
    fetchProjects()
      .then((data) => {
        handleProjects([...data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
          <Typography align='center' variant='h1'>
            Projects
          </Typography>
        </Grid>
        <Grid container spacing={4} className={classes.main}>
          {projects &&
            projects.map((proj, i) => {
              console.log('proj', proj);
              return (
                <Grid item xs={6} key={i}>
                  <ProjectCard project={proj} />
                </Grid>
              );
            })}
        </Grid>
      </Grid>
      <MailingList />
      <Footer />
    </div>
  );
}
