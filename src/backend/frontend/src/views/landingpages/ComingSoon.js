import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  CssBaseline,
  Grid,
  TextField,
  Button,
  Typography,
  makeStyles
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useFormik } from 'formik';
import api from '../../utils/api';
import { Footer } from '../../components/index';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  main: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(18),
    marginBottom: theme.spacing(35)
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(8, 0)
  },
  messageBox: {
    margin: theme.spacing(18)
  },
  messageDesc: {
    marginTop: theme.spacing(3)
  },
  nameField: {
    width: '100%'
  },
  emailField: {
    width: '100%'
  },
  subButton: {
    justifyContent: 'end',
    alignItems: 'center',
    height: '7vh'
  }
}));

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

function ComingSoon() {
  const [msgSuccess, setMsgStatus] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validate,
    onSubmit: (values) => {
      api
        .post('v1/inquiries', values)
        .then((response) => {
          formik.resetForm();
          setMsgStatus(true);
        })
        .catch((error) => {
          setMsgStatus(false);
          if (error.response) {
            console.error(error.response.data);
            console.error(error.response.status);
            console.error(error.response.headers);
          }
        });
    }
  });
  const classes = useStyles();

  const renderStatusAlert = (status) => {
    if (status) {
      return (
        <Alert severity='success'>
          Successful - Your message was received.
        </Alert>
      );
    } else {
      return (
        <Alert severity='success'>
          Error - There was a problem with your input
        </Alert>
      );
    }
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Trevor's Portfolio</title>
      </Helmet>
      <CssBaseline />

      <Grid container spacing={1} className={classes.main}>
        <Grid item xs={10}>
          <Typography align='center' variant='h1' component='h1'>
            Coming Soon!
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography
            align='center'
            variant='h6'
            component='h6'
            className={classes.messageDesc}
          >
            Get notified when I deploy!
          </Typography>
        </Grid>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2} className={classes.form}>
            <Grid item xs={12}>
              {msgSuccess && renderStatusAlert(msgSuccess)}
            </Grid>
            <Grid item xs={8}>
              {formik.errors.email ? <div>{formik.errors.email}</div> : null}
              <TextField
                id='email'
                label='Email'
                variant='outlined'
                name='email'
                className={classes.emailField}
                placeholder='example@email.com'
                value={formik.values.email}
                onChange={formik.handleChange}
                type='email'
                color='secondary'
                autoComplete='email'
              />
            </Grid>
            <Grid item xs={4}>
              <Button
                variant='contained'
                color='secondary'
                type='submit'
                className={classes.subButton}
                startIcon={<EmailIcon />}
              >
                Notify Me
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Footer />
    </div>
  );
}

export default ComingSoon;
