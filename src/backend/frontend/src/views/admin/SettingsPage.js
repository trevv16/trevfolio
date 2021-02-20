import React from 'react';
import { Helmet } from 'react-helmet-async';
import { makeStyles } from '@material-ui/core';
import {
  AdminNavigation,
  AdminFooter,
  AdminTable,
  AdminMainPage
} from '../../components/index';

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

const CompiledTable = () => {
  return (
    <AdminTable
      headers={['AdminName', 'AdminSlug', 'AdminStatus', 'AdminCreated']}
      rows={[
        ['Name', 'Slug', 'Status', 'Created'],
        ['Name', 'Slug', 'Status', 'Created'],
        ['Name', 'Slug', 'Status', 'Created'],
        ['Name', 'Slug', 'Status', 'Created']
      ]}
    />
  );
};

function SettingsPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Settings | Portfolio Admin</title>
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

export default SettingsPage;
