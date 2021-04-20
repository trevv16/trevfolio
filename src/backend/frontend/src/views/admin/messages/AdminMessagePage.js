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

function AdminMessagePage() {
  const classes = useStyles();
  const defaultRows = [
    ['Message', 'Name', 'Email', 'Created'],
    ['Message', 'Name', 'Email', 'Created'],
    ['Message', 'Name', 'Email', 'Created'],
    ['Message', 'Name', 'Email', 'Created']
  ];
  const [messages, handleMessages] = useState([]);
  const [messageRows, handleMessageRows] = useState(defaultRows);
  const [messageIds, handleMessageIds] = useState([]);

  useEffect(() => {
    api
      .fetch(`v1/inquiries`)
      .then((response) => {
        if (response && response.data !== []) {
          console.log(response.data.data);
          handleMessages(response.data.data);

          //Reshape array for table
          let messageRows = [];
          let messageIds = [];
          response.data.data.map((message) => {
            let created = message.createdAt ? message.createdAt : 'Unknown';
            let name = message.first_name + ' ' + message.last_name;
            messageRows.push([message.message, name, message.email, created]);
            messageIds.push(message._id);
          });
          handleMessageRows(messageRows);
          handleMessageIds(messageIds);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const CompiledTable = () => {
    return (
      <AdminTable
        resource={'messages'}
        headers={['Message', 'Name', 'Email', 'Created']}
        rows={messageRows}
        rowIds={messageIds}
      />
    );
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Messages | Portfolio Admin</title>
      </Helmet>
      <AdminNavigation />
      <AdminMainPage
        title='Messages'
        // primaryTxt='Create New'
        // primaryUrl={'/admin/messages/create'}
        // secondaryTxt={'Drafts'}
        // secondaryUrl={'#'}
        table={<CompiledTable />}
      />
      <AdminFooter />
    </div>
  );
}

export default AdminMessagePage;
