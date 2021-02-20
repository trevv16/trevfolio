import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { makeStyles } from '@material-ui/core';
import {
  AdminNavigation,
  AdminFooter,
  AdminMainPage,
  AdminTable
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

function AdminProjectPage() {
  const classes = useStyles();
  const defaultRows = [
    ['Name', 'Slug', 'Status', 'Created'],
    ['Name', 'Slug', 'Status', 'Created'],
    ['Name', 'Slug', 'Status', 'Created'],
    ['Name', 'Slug', 'Status', 'Created']
  ];
  const [projects, handleProjects] = useState([]);
  const [projectRows, handleProjectRows] = useState(defaultRows);
  const [projectIds, handleProjectIds] = useState([]);

  useEffect(() => {
    api
      .fetch(`v1/projects`)
      .then((response) => {
        if (response && response.data !== []) {
          handleProjects(response.data);

          //Reshape array for table
          let projRows = [];
          let projIds = [];
          response.data.map((proj) => {
            let status = proj.published ? 'Published' : 'Draft';
            let created = proj.createdAt ? proj.createdAt : 'Unknown';
            projRows.push([proj.title, proj.github_url, status, created]);
            projIds.push(proj._id);
          });
          handleProjectRows(projRows);
          handleProjectIds(projIds);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const CompiledTable = () => {
    return (
      <AdminTable
        resource={'projects'}
        headers={['Project Name', 'Github', 'Status', 'Created']}
        rows={projectRows}
        rowIds={projectIds}
      />
    );
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Projects | Portfolio Admin</title>
      </Helmet>
      <AdminNavigation />
      <AdminMainPage
        title='Projects'
        primaryTxt='Create New'
        primaryUrl={'/admin/projects/create'}
        secondaryTxt={'Drafts'}
        secondaryUrl={'#'}
        table={<CompiledTable />}
      />
      <AdminFooter />
    </div>
  );
}

export default AdminProjectPage;
