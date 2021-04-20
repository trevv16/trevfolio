import React, { useState, useEffect } from 'react';
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
import { AdminNavigation, AdminFooter } from '../../../components/index';

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
  const [skill, handleSkill] = useState({});
  const [msgSuccess, setMsgStatus] = useState(false);

  useEffect(() => {
    const id = props.match.params.skillID;
    api
      .fetch(`v1/skills/${id}`)
      .then((response) => {
        if (response && response.data !== []) {
          let skillData = response.data.data[0];

          skillData['status'] = skillData.published ? 'Published' : 'Draft';
          skillData['created'] = skillData.createdAt
            ? skill.createdAt
            : 'Unknown';

          handleSkill(skillData);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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

  return (
    <div className={classes.root}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{`${skill.name || 'Skill Detail'} | Portfolio Admin`}</title>
      </Helmet>
      <AdminNavigation />
      <Grid container spacing={3} className={classes.main}>
        <Grid item xs={10}>
          <Typography align='center' variant='h2' component='h2'>
            {skill.name || 'Skill Detail'}
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography align='center' variant='body1'>
            <img justify='center' src={skill.thumbnail} alt={skill.name} />
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography align='center' variant='body1'>
            {skill.description}
          </Typography>
        </Grid>
      </Grid>
      <AdminFooter />
    </div>
  );
}

export default AdminSkillDetailPage;
