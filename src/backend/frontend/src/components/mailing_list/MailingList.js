import React, { useState } from 'react';
import {
  CssBaseline,
  TextField,
  Button,
  Typography,
  Grid,
  makeStyles
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import api from '../../utils/api';
import EmailIcon from '@material-ui/icons/Email';
import { useFormik } from 'formik';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(15, 0)
  },
  mailBox: {
    paddingTop: theme.spacing(8)
  },
  mailDesc: {
    marginTop: theme.spacing(3)
  },
  content: {
    margin: theme.spacing(3, 0),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  firstNameField: {
    marginRight: theme.spacing(2)
  },
  email: {
    width: '1380%',
    marginBottom: theme.spacing(3)
  },
  form: {
    margin: theme.spacing(5, 15),
    justifyContent: 'center'
  },
  topFormRow: {
    flexDirection: 'row',
    display: 'flex',
    marginBottom: theme.spacing(5)
  },
  subscribe: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6)
  },
  subField: {
    width: '50vw',
    marginBottom: theme.spacing(6)
  },
  subButton: {
    height: '8vh',
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6)
  }
}));

const validate = (values) => {
  const errors = {};
  if (!values.first_name) {
    errors.first_name = 'Required';
  } else if (values.first_name.length > 15) {
    errors.first_name = 'Must be 15 characters or less';
  }

  if (!values.last_name) {
    errors.last_name = 'Required';
  } else if (values.last_name.length > 20) {
    errors.last_name = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

function MailingList() {
  const [msgSuccess, setMsgStatus] = useState(false);
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: ''
    },
    validate,
    onSubmit: (values) => {
      const subscriber = {
        first_name: values.first_name.trim(),
        last_name: values.last_name.trim(),
        email: values.email.trim(),
        main_newsletter: true
      };

      api
        .post('v1/subscribers', subscriber)
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
      <CssBaseline />
      <Grid container spacing={4} className={classes.content}>
        <Grid item xs={12}>
          <Typography align='center' variant='h4'>
            Join the Newsletter
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            align='center'
            variant='h6'
            component='h6'
            className={classes.mailDesc}
          >
            Subscribe to my newsletter if you would like to keep up with my
            projects, blog or any other updates.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {msgSuccess && renderStatusAlert(msgSuccess)}
        </Grid>
        <form
          onSubmit={formik.handleSubmit}
          className={classes.form}
          id='default-mailing-list'
        >
          <Grid item xs={12} className={classes.topFormRow}>
            <Grid item xs={6} className={'mb-2 mr-2'}>
              {formik.errors.first_name ? (
                <div>{formik.errors.first_name}</div>
              ) : null}
              <TextField
                id='first_name'
                name='first_name'
                label='First Name'
                variant='outlined'
                className={classes.firstNameField}
                placeholder='First Name'
                type='text'
                color='secondary'
                autoComplete='fname'
                value={formik.values.first_name}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={6} className={'mb-2'}>
              {formik.errors.last_name ? (
                <div>{formik.errors.last_name}</div>
              ) : null}
              <TextField
                id='last_name'
                name='last_name'
                label='Last Name'
                variant='outlined'
                placeholder='Last Name'
                type='text'
                color='secondary'
                autoComplete='fname'
                value={formik.values.last_name}
                onChange={formik.handleChange}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12}>
              {formik.errors.email ? <div>{formik.errors.email}</div> : null}
              <TextField
                id='email'
                name='email'
                label='Email'
                variant='outlined'
                className={classes.emailField}
                placeholder='example@email.com'
                type='email'
                color='secondary'
                autoComplete='email'
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant='contained'
                color='secondary'
                size='large'
                type='submit'
                className={classes.subButton}
                startIcon={<EmailIcon />}
              >
                Subscribe
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </div>
  );
}

export default MailingList;
