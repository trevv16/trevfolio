import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { AdminNavigation, AdminFooter } from '../../../components/index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  main: {
    justifyContent: 'center',
    marginTop: theme.spacing(18),
    marginBottom: theme.spacing(8)
  }
}));

function AdminMessageDetailPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Settings | Portfolio Admin</title>
      </Helmet>
      <AdminNavigation />
      <Grid container spacing={3} className={classes.main}>
        <Grid item xs={10}>
          <Typography align='center' variant='h1' component='h1'>
            Dashboard
          </Typography>
        </Grid>
      </Grid>
      <AdminFooter />
    </div>
  );
}

export default AdminMessageDetailPage;
