import React from 'react';
import { Link, Grid, Typography, makeStyles } from '@material-ui/core';
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
    backgroundColor: theme.palette.primary,
    border: 'none',
    borderRadius: '10px',
    padding: theme.spacing(1)
  },
  published: {
    border: `1px solid ${theme.palette.primary.light}`,
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

export default function ProjectHighlight(props) {
  const classes = useStyles();

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
              <Grid container spacing={1} className={classes.project}>
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
                  <Typography variant='body2'>{proj.description}</Typography>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
