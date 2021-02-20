import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.primary.main,
    color: '#ffffff',
    borderRadius: '10px',
    maxWidth: '400px',
    maxHeight: '350px',
    width: '100%',
    height: '100%',
    padding: theme.spacing(2, 4, 6, 4)
  },
  kpiName: {
    width: '100%',
    height: '100%'
  },
  kpiData: {
    width: '100%',
    height: '100%'
  }
}));

function KPICard(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4} className={classes.card}>
        <Grid item xs={12} className={classes.name}>
          <Typography align='center' variant='h4'>
            {props.name}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.data}>
          <Typography align='center' variant='body1'>
            {props.data}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default KPICard;
