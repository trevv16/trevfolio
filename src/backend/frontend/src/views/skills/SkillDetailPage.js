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
    marginTop: theme.spacing(14),
    marginBottom: theme.spacing(2)
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(12)
  },
  imageRow: {
    display: 'flex',
    justifyContent: 'center'
  },
  image: {
    minWidth: '20%',
    width: '30%',
    height: 'auto'
  },
  relevantProjects: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(2)
  }
}));

export default function ProjectDetail(props) {
  const [isBusy, setBusy] = useState(true);
  const _id = props.match.params.skillID;
  const classes = useStyles();
  const [skill, handleSkill] = useState({});
  const [hasGallery, setHasGallery] = useState(false);

  useEffect(() => {
    api
      .fetch(`v1/skills/${_id}/projects`)

      .then((response) => {
        const data = response.data.data;
        if (data !== [] || data[0]) {
          setBusy(false);
          handleSkill(data[0]);
        } else {
          setBusy(true);
        }
        console.log(response);

        if (data[0].thumbnail !== '' || data[0]) {
          setHasGallery(true);
        } else {
          setHasGallery(false);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [_id]);

  const DetailData = () => {
    let projects = skill.projects;
    console.log('projects', projects);
    // console.log('projects.length', projects.length);

    return (
      <React.Fragment>
        {skill && (
          <Grid container spacing={1} className={classes.main}>
            {hasGallery && (
              <Grid item xs={12} className={classes.imageRow}>
                <img
                  src={skill.thumbnail}
                  alt={skill.name}
                  className={classes.image}
                />
              </Grid>
            )}
            <Grid item xs={12}>
              <Typography align='center' variant='h2'>
                {`${skill.name}`}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography align='center' variant='body1'>
                {`${skill.description}`}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {skill.projects && skill.projects != [] && <ProjectGrid />}
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

  const ProjectGrid = () => {
    return (
      <React.Fragment>
        {skill.projects && skill.projects != [] && (
          <Grid container spacing={4} className={classes.main}>
            <Grid item xs={12}>
              <Typography
                align='center'
                variant='h3'
                className={classes.relevantProjects}
              >
                Relevant Projects
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ProjectGridList tileData={skill.projects} />
            </Grid>
          </Grid>
        )}
      </React.Fragment>
    );
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Skills | Trevor's Portfolio</title>
      </Helmet>
      <CssBaseline />
      <Navigation />
      {isBusy ? <Loading /> : <DetailData />}
      <MailingList />
      <Footer />
    </div>
  );
}
