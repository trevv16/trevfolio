import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import {
  AdminNavigation,
  AdminFooter,
  AdminTable,
  AdminMainPage
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

function AdminResumePage() {
  const classes = useStyles();
  const defaultRows = [
    ['Resume Name', 'Job Title', 'Company', 'Status', 'Created'],
    ['Resume Name', 'Job Title', 'Company', 'Status', 'Created'],
    ['Resume Name', 'Job Title', 'Company', 'Status', 'Created'],
    ['Resume Name', 'Job Title', 'Company', 'Status', 'Created']
  ];
  const [resumes, handleResumes] = useState([]);
  const [resumeRows, handleResumeRows] = useState(defaultRows);
  const [resumeIds, handleResumeIds] = useState([]);

  useEffect(() => {
    api
      .fetch(`v1/resumes`)
      .then((response) => {
        if (response && response.data !== []) {
          handleResumes(response.data);

          //Reshape array for table
          let resumeRows = [];
          let resumeIds = [];
          response.data.map((resume) => {
            let status = resume.published ? 'Published' : 'Draft';
            let created = resume.createdAt ? resume.createdAt : 'Unknown';
            resumeRows.push([
              resume.name,
              resume.meta.position_title,
              resume.meta.company,
              status,
              created
            ]);
            resumeIds.push(resume._id);
          });
          handleResumeRows(resumeRows);
          handleResumeIds(resumeIds);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const CompiledTable = () => {
    return (
      <AdminTable
        resource={'resumes'}
        headers={['Resume Name', 'Job Title', 'Company', 'Status', 'Created']}
        rows={resumeRows}
        rowIds={resumeIds}
      />
    );
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Resumes | Portfolio Admin</title>
      </Helmet>
      <AdminNavigation />
      <AdminMainPage
        title='Resumes'
        primaryTxt='Create New'
        primaryUrl={'/admin/resumes/create'}
        secondaryTxt={'Drafts'}
        secondaryUrl={'#'}
        table={<CompiledTable />}
      />
      <AdminFooter />
    </div>
  );
}

export default AdminResumePage;
