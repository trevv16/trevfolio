import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CssBaseline, Grid, makeStyles, Typography } from '@material-ui/core';
import _ from 'underscore';
import api from '../../utils/api';
import {
  MailingList,
  Navigation,
  Footer,
  Gallery
} from '../../components/index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  main: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(2)
  }
}));

export default function ProjectDetail(props) {
  const _id = props.match.params.id;
  const fetchProjects = () => {
    return Promise.resolve(
      api
        .fetch(`v1/projects/${_id}`)
        .then((response) => {
          return _.first(response.data, 4);
        })
        .catch((err) => {
          console.log(err);
        })
    );
  };
  const classes = useStyles();
  const [project, handleProject] = useState([]);
  const imgList = [
    {
      name: 'image1',
      src: 'https://source.unsplash.com/random/1600x600',
      description: 'Trev'
    },
    {
      name: 'image2',
      src: 'https://source.unsplash.com/random/1600x600',
      description: 'Trev'
    },
    {
      name: 'image2',
      src: 'https://source.unsplash.com/random/1600x600',
      description: 'Trev'
    }
  ];

  const dataReady = project.title !== undefined ? true : false;

  console.log('proj: ', project);
  useEffect(() => {
    fetchProjects()
      .then((data) => {
        handleProject([...data]);
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
      {project && dataReady && (
        <Grid container spacing={1} className={classes.main}>
          <Grid item xs={12}>
            <Gallery
              animation={'slide'}
              interval={5500}
              timeout={800}
              images={imgList}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography align='center' variant='h2'>
              {`${project.title}`}
            </Typography>
          </Grid>
        </Grid>
      )}
      <MailingList />
      <Footer />
    </div>
  );
}
