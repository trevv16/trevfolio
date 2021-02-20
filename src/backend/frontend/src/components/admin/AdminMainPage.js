import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { AdminActionHeader } from '../../components/index';

const useStyles = makeStyles((theme) => ({
  main: {
    justifyContent: 'center',
    marginTop: theme.spacing(18),
    marginBottom: theme.spacing(8)
  }
}));

function AdminMainPage(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.main}>
        <Grid item xs={10}>
          <AdminActionHeader
            title={props.title}
            primaryTxt={props.primaryTxt}
            primaryUrl={props.primaryUrl}
            secondaryTxt={props.secondaryTxt}
            secondaryUrl={props.secondaryUrl}
          />
        </Grid>
        <Grid item xs={10}>
          {props.table}
        </Grid>
      </Grid>
    </div>
  );
}

export default AdminMainPage;
