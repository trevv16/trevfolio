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
  SkillGridList
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

export default function SkillsPage(props) {
  const classes = useStyles();
  const [skills, handleSkills] = useState([]);
  const [isBusy, setBusy] = useState(true);

  useEffect(() => {
    api
      .fetch(`v1/skills`)
      .then((response) => {
        const data = response.data.data;
        const skill = data.filter((skill) => {
          //Check if the project is published before storing
          return skill.published !== false;
        });

        if (skill && skill !== []) {
          setBusy(false);
          handleSkills([...skill]);
        } else {
          setBusy(true);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const SkillGrid = () => {
    return (
      <React.Fragment>
        {skills && (
          <Grid container spacing={4} className={classes.main}>
            <SkillGridList tileData={skills} />
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
        <title>Skills | Trevor's Portfolio</title>
      </Helmet>
      <CssBaseline />
      <Navigation />
      <Grid container spacing={1} className={classes.main}>
        <Grid item xs={12}>
          <Typography align='center' variant='h1'>
            Skills
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {isBusy ? <Loading /> : <SkillGrid />}
        </Grid>
      </Grid>
      <MailingList />
      <Footer />
    </div>
  );
}
