import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Grid,
  Typography,
  makeStyles,
  TextField,
  Button
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import SaveIcon from '@material-ui/icons/Save';
import { useFormik } from 'formik';
import api from '../../../utils/api';
import {
  AdminNavigation,
  AdminFooter,
  Toggle
} from '../../../components/index';

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
  }
}));

function AdminSkillDetailPage(props) {
  const classes = useStyles();
  const [msgSuccess, setMsgStatus] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      thumbnail: '',
      projects: [],
      published: false
    },
    validate,
    onSubmit: (values) => {
      api
        .post('/v1/skills', values)
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
      <Helmet>
        <meta charSet='utf-8' />
        <title>Create Skill | Portfolio Admin</title>
      </Helmet>
      <AdminNavigation />
      <Grid container spacing={3} className={classes.main}>
        <Grid item xs={10}>
          <Typography align='center' variant='h3' component='h3'>
            Create Skill
          </Typography>
        </Grid>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2} className={classes.form}>
            <Grid item xs={12}>
              {msgSuccess && renderStatusAlert(msgSuccess)}
            </Grid>
            <Grid item xs={5}>
              {formik.errors.name ? <div>{formik.errors.name}</div> : null}
              <TextField
                id='name'
                label='Skill Name'
                variant='outlined'
                name='name'
                className={classes.nameField}
                placeholder='Elon'
                value={formik.values.name}
                onChange={formik.handleChange}
                type='text'
                color='secondary'
              />
            </Grid>
            <Grid item xs={5}>
              {formik.errors.published ? (
                <div>{formik.errors.published}</div>
              ) : null}
              {console.log(props)}
              <Toggle
                value={formik.values.published}
                onClick={() =>
                  props.setFieldValue('published', !formik.values.published)
                }
              />
            </Grid>
            <Grid item xs={5}>
              {formik.errors.thumbnail ? (
                <div>{formik.errors.thumbnail}</div>
              ) : null}
              <TextField
                id='thumbnail'
                label='Thumbnail'
                name='thumbnail'
                variant='outlined'
                className={classes.nameField}
                placeholder='Position Title'
                value={formik.values.thumbnail}
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
              {formik.errors.description ? (
                <div>{formik.errors.description}</div>
              ) : null}
              <TextField
                id='description'
                label='Description'
                variant='outlined'
                name='description'
                multiline
                rows={3}
                className={classes.emailField}
                value={formik.values.description}
                onChange={formik.handleChange}
                type='textarea'
                color='secondary'
              />
            </Grid>
            <Grid item xs={10}>
              <Button
                variant='contained'
                color='secondary'
                size='large'
                type='submit'
                className={classes.subButton}
                startIcon={<SaveIcon />}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <AdminFooter />
    </div>
  );
}

export default AdminSkillDetailPage;
