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
  ProjectGridList
} from '../../components/index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  main: {
    marginTop: theme.spacing(18),
    marginBottom: theme.spacing(2)
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

export default function Project(props) {
  const classes = useStyles();
  const [projects, handleProjects] = useState([]);
  const [isBusy, setBusy] = useState(true);

  useEffect(() => {
    api
      .fetch(`v1/projects`)
      .then((response) => {
        const data = response.data;
        const proj = data.filter((proj) => {
          //Check if the project is published before storing
          return proj.published !== false;
        });

        if (proj !== [] && proj !== undefined) {
          setBusy(false);
          handleProjects([...proj]);
        } else {
          setBusy(true);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const ProjectGrid = () => {
    return (
      <React.Fragment>
        {projects && (
          <Grid container spacing={4} className={classes.main}>
            <ProjectGridList tileData={projects} />
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
      <Grid container spacing={1} className={classes.main}>
        <Grid item xs={12}>
          <Typography align='center' variant='h1'>
            Projects
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {isBusy ? <Loading /> : <ProjectGrid />}
        </Grid>
      </Grid>
      <MailingList />
      <Footer />
    </div>
  );
}
