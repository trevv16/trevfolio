import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { makeStyles } from '@material-ui/core';
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

function AdminSkillPage() {
  const classes = useStyles();
  const defaultRows = [
    ['Resume Name', 'Description', 'Status', 'Created'],
    ['Resume Name', 'Description', 'Status', 'Created'],
    ['Resume Name', 'Description', 'Status', 'Created'],
    ['Resume Name', 'Description', 'Status', 'Created']
  ];
  const [skills, handleSkills] = useState([]);
  const [skillRows, handleSkillRows] = useState(defaultRows);
  const [skillIds, handleSkillIds] = useState([]);

  useEffect(() => {
    api
      .fetch(`v1/skills`)
      .then((response) => {
        if (response && response.data !== []) {
          handleSkills(response.data);

          //Reshape array for table
          let skillRows = [];
          let skillIds = [];
          response.data.data.map((skill) => {
            let status = skill.published ? 'Published' : 'Draft';
            let created = skill.createdAt ? skill.createdAt : 'Unknown';
            let description = skill.description.substring(0, 29) + '...';
            skillRows.push([skill.name, description, status, created]);
            skillIds.push(skill._id);
          });
          handleSkillRows(skillRows);
          handleSkillIds(skillIds);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const CompiledTable = () => {
    return (
      <AdminTable
        resource={'skills'}
        headers={['Skill Name', 'Description', 'Status', 'Created']}
        rows={skillRows}
        rowIds={skillIds}
      />
    );
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Skills | Portfolio Admin</title>
      </Helmet>
      <AdminNavigation />
      <AdminMainPage
        title='Skills'
        primaryTxt='Create New'
        primaryUrl={'/admin/skills/create'}
        secondaryTxt={'Drafts'}
        secondaryUrl={'#'}
        table={<CompiledTable />}
      />
      <AdminFooter />
    </div>
  );
}

export default AdminSkillPage;
