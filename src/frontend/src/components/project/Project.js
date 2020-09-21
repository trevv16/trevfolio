import React, { Component } from 'react';

import { Link, Grid, Typography, makeStyles } from '@material-ui/core';
// import {} from '@material-ui/icons';

// const params = useParams();

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(18),
    marginBottom: theme.spacing(2)
  },
  project: {
    backgroundColor: theme.palette.dark,
    border: 'none',
    borderRadius: '10px',
    padding: theme.spacing(1)
    // width: 'auto'
    // height: '10vh'
  }
}));

export function ProjectHighlight(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} className={classes.main}>
        {props.projects.map((proj, i) => {
          return (
            <Grid item xs={4} key={i}>
              <Grid container spacing={3} className={classes.project}>
                <Grid item xs={12}>
                  <img src={proj.thumbnail} alt='project thumbnail' />
                </Grid>
                <Grid item xs={12}>
                  <Grid item xs={8}>
                    <Typography component='h3' variant='h3'>
                      {proj.title}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography component='h5' variant='h5'>
                      {proj.published}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography component='body2' variant='body2'>
                    {proj.description}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default class ProjectCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skillName: null,
      skillQuery: null
    };
  }

  props = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    main: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: theme.spacing(18),
      marginBottom: theme.spacing(2)
    }
  }));

  render() {
    const classes = this.props;
    return (
      <div className={classes.root}>
        <Grid container xs={12} spacing={1} className={classes.main}>
          <Grid item xs={12}></Grid>
        </Grid>
      </div>
    );
  }
}

export class ProjectDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skillName: null,
      skillQuery: null
    };
  }

  props = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    main: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: theme.spacing(18),
      marginBottom: theme.spacing(2)
    }
  }));

  render() {
    const classes = this.props;
    return (
      <div className={classes.root}>
        <Grid container xs={12} spacing={1} className={classes.main}>
          <Grid item xs={12}></Grid>
        </Grid>
      </div>
    );
  }
}
