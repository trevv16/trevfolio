import React, { useState } from 'react';
import {
  CssBaseline,
  Link,
  Grid,
  Paper,
  Typography,
  makeStyles,
  Button
} from '@material-ui/core';
import { InfoIcon } from '@material-ui/icons';
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
  const classes = useStyles();
  const skillData = [
    {
      img: 'https://source.unsplash.com/random/1080x1080',
      title: 'Skill Name'
    },
    {
      img: 'https://source.unsplash.com/random/1080x800',
      title: 'Skill Name'
    },
    {
      img: 'https://source.unsplash.com/random/2080x800',
      title: 'Skill Name'
    },
    {
      img: 'https://source.unsplash.com/random/1080x800',
      title: 'Skill Name'
    },
    {
      img: 'https://source.unsplash.com/random/1080x800',
      title: 'Skill Name'
    },
    {
      img: 'https://source.unsplash.com/random/1080x800',
      title: 'Skill Name'
    },
    {
      img: 'https://source.unsplash.com/random/1080x800',
      title: 'Skill Name'
    },
    {
      img: 'https://source.unsplash.com/random/1080x800',
      title: 'Skill Name'
    },
    {
      img: 'https://source.unsplash.com/random/1080x800',
      title: 'Skill Name'
    },
    {
      img: 'https://source.unsplash.com/random/1080x800',
      title: 'Skill Name'
    },
    {
      img: 'https://source.unsplash.com/random/1080x800',
      title: 'Skill Name'
    },
    {
      img: 'https://source.unsplash.com/random/1080x800',
      title: 'Skill Name'
    },
    {
      img: 'https://source.unsplash.com/random/1080x800',
      title: 'Skill Name'
    },
    {
      img: 'https://source.unsplash.com/random/1080x800',
      title: 'Skill Name'
    },
    {
      img: 'https://source.unsplash.com/random/1080x800',
      title: 'Skill Name'
    },
    {
      img: 'https://source.unsplash.com/random/1080x800',
      title: 'Skill Name'
    },
    {
      img: 'https://source.unsplash.com/random/1080x800',
      title: 'Skill Name'
    },
    {
      img: 'https://source.unsplash.com/random/1080x800',
      title: 'Skill Name'
    },
    {
      img: 'https://source.unsplash.com/random/1080x800',
      title: 'Skill Name'
    },
    {
      img: 'https://source.unsplash.com/random/1080x800',
      title: 'Skill Name'
    }
  ];

  const GenGrid = () => {
    var html = [];
    for (let index = 0; index < props.size; index++) {
      html.push(
        <Grid item key={index}>
          <Link component='a' href='#' variant='body2'>
            <Paper elevation={3} className={classes.skill}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <img
                    src={'https://source.unsplash.com/random/1080x800'}
                    alt={'skill icon'}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant='h6'
                    className={classes.skillName}
                  >{`${props.altText}`}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Link>
        </Grid>
      );
    }
    return html;
  };

  const fetchSkills = () => {
    api
      .fetch('/v1/skills')
      .then((response) => {
        setSkills([response.data]);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  };

  return (
    <div>
      <CssBaseline />
      <Grid
        container
        spacing={2}
        // bgcolor='light.light'
        className={classes.jumboBox}
      >
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
            {/* <GenGrid size={22} /> */}
            <SkillGridList tileData={skillData} />
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
