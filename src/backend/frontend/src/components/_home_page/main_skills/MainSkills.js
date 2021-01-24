import React, { useState, useEffect } from 'react';
import {
  CssBaseline,
  Grid,
  Typography,
  makeStyles,
  Button,
  CircularProgress
} from '@material-ui/core';
import api from '../../../utils/api';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SkillGridList from './SkillGridList';

const useStyles = makeStyles((theme) => ({
  jumboBox: {
    paddingTop: theme.spacing(8)
  },
  description: {
    marginTop: theme.spacing(3)
  },
  skillGrid: {
    padding: theme.spacing(8)
  },
  skill: {
    display: 'flex',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2)
  },
  skillName: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridRoot: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(3, 0),
    width: '100%'
  },
  skillButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(6, 0)
  }
}));

function MainSkills(props) {
  const [skills, setSkills] = useState([]);
  const [isBusy, setBusy] = useState(true);
  const classes = useStyles();

  const Loading = () => {
    return (
      <React.Fragment>
        <CircularProgress color='secondary' className={classes.loading} />
      </React.Fragment>
    );
  };

  useEffect(() => {
    api
      .fetch('v1/skills')
      .then((response) => {
        const data = response.data;
        const skill = data.filter((sk) => {
          //Check if the skill is published before storing
          return sk.published !== false;
        });

        if (skill && skill !== []) {
          setBusy(false);
          setSkills([...skill]);
        } else {
          setBusy(true);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.error(error.response.data);
          console.error(error.response.status);
          console.error(error.response.headers);
        }
      });
  }, []);

  return (
    <div>
      <CssBaseline />
      <Grid container spacing={2} className={classes.jumboBox}>
        <Grid item xs={12}>
          <Typography align='center' variant='h3' component='h3'>
            Highlighted Skills
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            align='center'
            variant='h6'
            component='h6'
            className={classes.description}
          >
            This section details all my skills and serves as menu to navigate
            through my different projects. Click a skill to navigate to relevant
            projects.
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.skillGrid}>
          <Grid container className={classes.gridRoot} spacing={8}>
            {isBusy ? <Loading /> : <SkillGridList tileData={skills} />}
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.skillButton}>
          <Button
            variant='contained'
            color='secondary'
            size='large'
            href='/skills'
            endIcon={<ChevronRightIcon />}
          >
            View All
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainSkills;
