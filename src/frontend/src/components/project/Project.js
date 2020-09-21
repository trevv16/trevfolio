import React, { Component } from 'react';
import {
  Link,
  Grid,
  Typography,
  makeStyles,
  withStyles
} from '@material-ui/core';
// import {} from '@material-ui/icons';

// const params = useParams();

export function ProjectHighlight(props) {
  const classes = makeStyles((theme) => ({
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
      backgroundColor: theme.palette.primary,
      border: 'none',
      borderRadius: '10px',
      padding: theme.spacing(1)
    },
    published: {
      backgroundColor: theme.palette.primary.light,
      border: 'none',
      borderRadius: '6px',
      fontSize: '2rem',
      padding: theme.spacing(2),
      height: 'auto',
      textTransform: 'uppercase'
    },
    thumbnail: {
      width: '100%',
      height: 'auto',
      padding: 0
    }
  }));

  return (
    <div className={classes.root}>
      <Grid container spacing={4} className={classes.main}>
        {props.projects.map((proj, i) => {
          return (
            <Grid
              item
              xs={
                12 / props.projects.length > 3 ? 12 / props.projects.length : 3
              }
              key={i}
            >
              <Grid
                container
                spacing={1}
                className={classes.project}
                className={classes.root}
              >
                <Grid item xs={12}>
                  <img
                    src={proj.thumbnail}
                    alt='project thumbnail'
                    className={classes.thumbnail}
                  />
                </Grid>
                <Grid item xs={10}>
                  <Typography component='h3' variant='h3'>
                    <Link href={`/projects/${proj._id}`} color='secondary'>
                      {proj.title}
                    </Link>
                  </Typography>
                </Grid>
                <Grid item xs={2} className={classes.published}>
                  <Typography component='h5' variant='h5'>
                    {proj.published}
                  </Typography>
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
export default function ProjectCard(props) {
  const classes = withStyles((theme) => ({
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
      backgroundColor: theme.palette.primary,
      border: 'none',
      borderRadius: '10px',
      padding: theme.spacing(1)
    },
    published: {
      backgroundColor: theme.palette.primary.light,
      border: 'none',
      borderRadius: '6px',
      fontSize: '2rem',
      padding: theme.spacing(2),
      height: 'auto',
      textTransform: 'uppercase'
    },
    thumbnail: {
      width: '100%',
      height: 'auto',
      padding: 0
    }
  }));

  return (
    <div className={classes.root}>
      <Grid container spacing={4} className={classes.main}>
        {props.projects.map((proj, i) => {
          return (
            <Grid item xs={12 / props.projects.length} key={i}>
              <Grid
                container
                spacing={1}
                className={classes.project}
                className={classes.root}
              >
                <Grid item xs={12}>
                  <img
                    src={proj.thumbnail}
                    alt='project thumbnail'
                    className={classes.thumbnail}
                  />
                </Grid>
                <Grid item xs={10}>
                  <Typography component='h3' variant='h3'>
                    <Link href={`/projects/${proj._id}`} color='secondary'>
                      {proj.title}
                    </Link>
                  </Typography>
                </Grid>
                <Grid item xs={2} className={classes.published}>
                  <Typography component='h5' variant='h5'>
                    {proj.published}
                  </Typography>
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
