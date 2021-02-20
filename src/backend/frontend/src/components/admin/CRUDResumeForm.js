import React, { useState } from 'react';
import { makeStyles, TextField, Button, Grid } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useFormik } from 'formik';
import api from '../../utils/api';
import EmailIcon from '@material-ui/icons/Email';
import { AdminActionHeader } from '../../components/index';

const validate = (values) => {
  const errors = {};
  if (!values.company) {
    errors.company = 'Required';
  } else if (values.company.length > 65) {
    errors.company = 'Must be 65 characters or less';
  }

  if (!values.position_title) {
    errors.position_title = 'Required';
  } else if (values.position_title.length > 65) {
    errors.position_title = 'Must be 65 characters or less';
  }

  if (!values.file) {
    errors.file = 'Required';
  }
  if (!values.profile_img) {
    errors.profile_img = 'Required';
  }

  if (!values.headline) {
    errors.headline = 'Required';
  } else if (values.headline.length > 35) {
    errors.headline = 'Must be 35 characters or less';
  }

  if (!values.phone) {
    errors.phone = 'Required';
  } else if (values.phone.length > 12) {
    errors.phone = 'Must be 12 characters or less';
  }

  if (!values.website) {
    errors.website = 'Required';
  } else if (values.website.length > 30) {
    errors.website = 'Must be 30 characters or less';
  }

  if (!values.summary) {
    errors.message = 'Required';
  } else if (values.summary.length > 280) {
    errors.summary = 'Must be 280 characters or less';
  }

  return errors;
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  main: {
    justifyContent: 'center',
    marginTop: theme.spacing(18),
    marginBottom: theme.spacing(8)
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

function CRUDResumeForm(props) {
  const classes = useStyles();
  const [msgSuccess, setMsgStatus] = useState(false);
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

  const handleSave = () => {
    console.log('Save');
  };

  const handleSaveDraft = () => {
    console.log('Save Draft');
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1} className={classes.main}>
        <Grid item xs={10}>
          <AdminActionHeader
            title={'Resume'}
            primaryTxt={'Save'}
            primaryHandle={handleSave}
            secondaryTxt={'Save Draft'}
            secondaryHandle={handleSaveDraft}
          />
        </Grid>
        <Grid item xs={12}>
          {msgSuccess && renderStatusAlert(msgSuccess)}
        </Grid>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2} className={classes.form}>
            <Grid item xs={12}>
              {msgSuccess && renderStatusAlert(msgSuccess)}
            </Grid>
            <Grid item xs={5}>
              {formik.errors.company ? (
                <div>{formik.errors.company}</div>
              ) : null}
              <TextField
                id='company'
                label='Company Name'
                variant='outlined'
                name='company_name'
                className={classes.nameField}
                placeholder='Elon'
                value={formik.values.company}
                onChange={formik.handleChange}
                type='text'
                color='secondary'
              />
            </Grid>
            <Grid item xs={5}>
              {formik.errors.position_title ? (
                <div>{formik.errors.position_title}</div>
              ) : null}
              <TextField
                id='position_title'
                label='Position Title'
                name='position_title'
                variant='outlined'
                className={classes.nameField}
                placeholder='Position Title'
                value={formik.values.last_name}
                onChange={formik.handleChange}
                type='text'
                color='secondary'
              />
            </Grid>
            <Grid item xs={5}>
              {formik.errors.file ? <div>{formik.errors.file}</div> : null}
              <TextField
                id='file'
                label='Resume File'
                variant='outlined'
                name='file'
                className={classes.emailField}
                placeholder='Resume File'
                value={formik.values.email}
                onChange={formik.handleChange}
                type='text'
                color='secondary'
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
    </div>
  );
}

export default CRUDResumeForm;
