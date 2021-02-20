import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { AdminNavigation, AdminFooter, KPICard } from '../../components/index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    marginBottom: theme.spacing(8)
  },
  main: {
    justifyContent: 'center',
    marginTop: theme.spacing(18),
    marginBottom: theme.spacing(8)
  },
  kpi: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

function DashboardPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Settings | Portfolio Admin</title>
      </Helmet>
      <AdminNavigation />
      <Grid container spacing={3} className={classes.main}>
        <Grid item xs={10} className={classes.title}>
          <Typography align='center' variant='h1' component='h1'>
            Dashboard
          </Typography>
        </Grid>
        <Grid item xs={4} className={classes.kpi}>
          <KPICard name='Last Update' data={'2/21/20 - 3:00 PM'} />
        </Grid>
        <Grid item xs={4} className={classes.kpi}>
          <KPICard name='Subscribers' data={'112'} />
        </Grid>
        <Grid item xs={4} className={classes.kpi}>
          <KPICard name='Inquiries' data={'19'} />
        </Grid>
      </Grid>
      <AdminFooter />
    </div>
  );
}

export default DashboardPage;
