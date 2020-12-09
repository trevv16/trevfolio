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
import { MailingList, Navigation, Footer } from '../../components/index';
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
    marginBottom: theme.spacing(2)
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
    height: '6vh'
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

  if (!values.message) {
    errors.message = 'Required';
  } else if (values.message.length > 240) {
    errors.message = 'Must be 240 characters or less';
  }

  return errors;
};

function Contact() {
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      message: ''
    },
    validate,
    onSubmit: (values) => {
      api
        .post('/v1/inquiries', values)
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
  const [msgSuccess, setMsgStatus] = useState(false);
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
        <title>Contact | Trevor's Portfolio</title>
      </Helmet>
      <CssBaseline />
      <Navigation />

      <Grid container spacing={1} className={classes.main}>
        <Grid item xs={10}>
          <Typography align='center' variant='h1' component='h1'>
            Send a Message
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography
            align='center'
            variant='h6'
            component='h6'
            className={classes.messageDesc}
          >
            If you have a question or would like to get in contact with me,
            reach out to me here.
          </Typography>
        </Grid>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2} className={classes.form}>
            <Grid item xs={12}>
              {msgSuccess && renderStatusAlert(msgSuccess)}
            </Grid>
            <Grid item xs={5}>
              {formik.errors.first_name ? (
                <div>{formik.errors.first_name}</div>
              ) : null}
              <TextField
                id='first-name'
                label='First Name'
                variant='outlined'
                name='first_name'
                className={classes.nameField}
                placeholder='Elon'
                value={formik.values.first_name}
                onChange={formik.handleChange}
                type='text'
                color='secondary'
                autoComplete='name'
              />
            </Grid>
            <Grid item xs={5}>
              {formik.errors.last_name ? (
                <div>{formik.errors.last_name}</div>
              ) : null}
              <TextField
                id='last-name'
                label='Last Name'
                name='last_name'
                variant='outlined'
                className={classes.nameField}
                placeholder='Musk'
                value={formik.values.last_name}
                onChange={formik.handleChange}
                type='text'
                color='secondary'
                autoComplete='family-name'
              />
            </Grid>
            <Grid item xs={10}>
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
            <Grid item xs={10}>
              {formik.errors.message ? (
                <div>{formik.errors.message}</div>
              ) : null}
              <TextField
                id='message'
                label='Message'
                variant='outlined'
                name='message'
                multiline
                rows={3}
                className={classes.emailField}
                placeholder='Your Message Here'
                value={formik.values.message}
                onChange={formik.handleChange}
                type='textarea'
                color='secondary'
                autoComplete='email'
              />
            </Grid>
            <Grid item xs={10}>
              <Button
                variant='contained'
                color='secondary'
                size='large'
                type='submit'
                className={classes.subButton}
                startIcon={<EmailIcon />}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <MailingList />
      <Footer />
    </div>
  );
}

export default Contact;
