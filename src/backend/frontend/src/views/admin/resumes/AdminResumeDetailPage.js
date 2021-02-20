import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { makeStyles } from '@material-ui/core';
import {
  AdminNavigation,
  AdminFooter,
  CRUDResumeForm
} from '../../../components/index';
import api from '../../../utils/api';

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

function AdminResumeDetailPage(props) {
  const classes = useStyles();
  const _id = props.match.params.resumeID;
  const [resume, handleResume] = useState([]);

  useEffect(() => {
    api
      .fetch(`v1/resumes/${_id}`)
      .then((response) => {
        if (response && response.data !== {}) {
          handleResume(response.data);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [_id]);

  return (
    <div className={classes.root}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Resume Detail | Portfolio Admin</title>
      </Helmet>
      <AdminNavigation />
      <CRUDResumeForm resumeData={resume} />
      <AdminFooter />
    </div>
  );
}

export default AdminResumeDetailPage;
