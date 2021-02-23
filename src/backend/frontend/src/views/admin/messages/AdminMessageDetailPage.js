import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { AdminNavigation, AdminFooter } from '../../../components/index';
import api from '../../../utils/api';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  center: {
    justifyContent: 'center'
  },
  main: {
    justifyContent: 'center',
    marginTop: theme.spacing(18),
    marginBottom: theme.spacing(8)
  }
}));

function AdminMessageDetailPage(props) {
  const [message, handleMessage] = useState({});
  const classes = useStyles();

  useEffect(() => {
    api
      .fetch(`v1/inquiries/${props.match.params.messageID}`)
      .then((response) => {
        if (response && response.data !== []) {
          console.log(response);
          let msgData = response.data[0];
          let created = msgData.createdAt ? msgData.createdAt : 'Unknown';
          let name = msgData.first_name + ' ' + msgData.last_name;

          let msg = {
            name,
            email: msgData.email,
            msg: msgData.message,
            created
          };

          handleMessage(msg);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className={classes.root}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{`Message from ${message.name} | Portfolio Admin`}</title>
      </Helmet>
      <AdminNavigation />
      <Grid container spacing={3} className={classes.main}>
        <Grid item xs={10}>
          <Typography align='center' variant='h3' component='h1'>
            Message from,{message.name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align='center' variant='h5' component='h5'>
            {message.email}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align='center' variant='body1' className={classes.msg}>
            {message.msg}
          </Typography>
        </Grid>
      </Grid>
      <AdminFooter />
    </div>
  );
}

export default AdminMessageDetailPage;
