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

export default function SkillsProjectListPage(props) {
  const classes = useStyles();
  const [skill, handleSkill] = useState({});
  const [projects, handleProject] = useState([]);
  const [isBusy, setBusy] = useState(true);
  const _id = props.match.params.skillID;

  useEffect(() => {
    api
      .fetch(`v1/skills/${_id}/projects`)
      .then((response) => {
        const data = response.data.data;
        if (data.projects) {
          const projData = data.projects.filter((proj) => {
            //Check if the project is published before storing
            return skill.published !== false;
          });

          handleProject(projData);
        }

        if (data && data !== []) {
          setBusy(false);
          handleSkill(data[0]);
        } else {
          setBusy(true);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [_id]);

  const SkillGrid = () => {
    const hasProjects = typeof projects !== 'undefined' && projects.length > 0;
    return (
      <React.Fragment>
        {hasProjects && (
          <Grid container spacing={4} className={classes.main}>
            <Grid item xs={12}>
              <ProjectGridList tileData={projects} />
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
      <Grid container spacing={1} className={classes.main}>
        <Grid item xs={12}>
          <Typography align='center' variant='h1'>
            {`Projects with ${skill.name}`}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align='center' variant='body2'>
            {skill.description}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {isBusy && <SkillGrid />}
        </Grid>
      </Grid>
      <MailingList />
      <Footer />
    </div>
  );
}
