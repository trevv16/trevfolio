import React from 'react';
import { CssBaseline, makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  jumboBox: {
    marginTop: theme.spacing(3),
    overflow: 'hidden'
  },
  jumboMedia: {
    maxWidth: '100%',
    maxHeight: '100%'
  }
}));

function Jumbotron() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Grid container xs={12} className={classes.jumboBox}>
        <Grid item xs={12}>
          <img
            src='https://source.unsplash.com/random/1920x500'
            alt='jumbotron'
            className={classes.jumboMedia}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Jumbotron;
