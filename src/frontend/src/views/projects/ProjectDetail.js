import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  CssBaseline,
  Grid,
  makeStyles,
  Typography,
  CircularProgress
} from '@material-ui/core';
import api from '../../utils/api';
import {
  MailingList,
  Navigation,
  Footer,
  Gallery,
  ProjectDetailDrawer
} from '../../components/index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  main: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(2)
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(12)
  }
}));

export default function ProjectDetail(props) {
  const [isBusy, setBusy] = useState(true);
  const _id = props.match.params.id;
  const classes = useStyles();
  const [project, handleProject] = useState(null);
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
  const hasGallery =
    project === null || project.gallery.length === 0 ? false : true;

  const fetchProjects = () => {
    return Promise.resolve(
      api
        .fetch(`v1/projects/${_id}`)
        .then((response) => {
          return response.data;
        })
        .catch((err) => {
          console.log(err);
        })
    );
  };

  useEffect(() => {
    fetchProjects()
      .then((data) => {
        if (data !== [] || data[0] !== undefined) {
          setBusy(false);
          handleProject(data[0]);
        } else {
          setBusy(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const DetailData = () => {
    return (
      <React.Fragment>
        {project && (
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
            <Grid item xs={12}>
              <Typography align='center' variant='body1'>
                {`${project.description}`}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography align='center' variant='h5'>
                {`Demo: ${project.demo_url}`}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography align='center' variant='h5'>
                {`Github: ${project.github_url}`}
              </Typography>
            </Grid>
            {hasGallery && (
              <Grid item xs={12}>
                <Gallery
                  animation={'slide'}
                  interval={5500}
                  timeout={800}
                  images={project.gallery}
                />
              </Grid>
            )}
            <Grid item xs={12}>
              <ProjectDetailDrawer process={project.process} />
            </Grid>
          </Grid>
        )}
      </React.Fragment>
    );
  };

  const Loading = () => {
    return (
      <React.Fragment>
        <CircularProgress color='secondary' className={classes.loading} />
      </React.Fragment>
    );
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Projects | Trevor's Portfolio</title>
      </Helmet>
      <CssBaseline />
      <Navigation />
      {isBusy ? <Loading /> : <DetailData />}
      <MailingList />
      <Footer />
    </div>
  );
}
