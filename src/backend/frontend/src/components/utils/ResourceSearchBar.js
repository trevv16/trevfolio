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
  if (!values.search) {
    errors.search = 'Required';
  } else if (values.search.length > 65) {
    errors.search = 'Must be 65 characters or less';
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

function ResourchSearchBar(props) {
  const classes = useStyles();
  const [msgSuccess, setMsgStatus] = useState(false);
  const formik = useFormik({
    initialValues: {
      search: ''
    },
    validate,
    onSubmit: (values) => {
      api
        .get('/v1/projects', values)
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

  return (
    <div className={classes.root}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} className={classes.form}>
          <Grid item xs={12}>
            {msgSuccess && renderStatusAlert(msgSuccess)}
          </Grid>
          <Grid item xs={5}>
            {formik.errors.search ? <div>{formik.errors.search}</div> : null}
            <TextField
              id='search'
              label='Search'
              variant='outlined'
              name='search'
              className={classes.nameField}
              value={formik.values.search}
              onChange={formik.handleChange}
              type='text'
              color='secondary'
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default ResourchSearchBar;
