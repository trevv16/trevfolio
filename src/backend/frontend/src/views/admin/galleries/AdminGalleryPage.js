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

function AdminGalleryPage() {
  const classes = useStyles();
  const defaultRows = [
    ['Gallery Name', 'Description', 'Status', 'Created'],
    ['Gallery Name', 'Description', 'Status', 'Created'],
    ['Gallery Name', 'Description', 'Status', 'Created'],
    ['Gallery Name', 'Description', 'Status', 'Created']
  ];
  const [galleries, handleGalleries] = useState([]);
  const [galleryRows, handleGalleryRows] = useState(defaultRows);
  const [galleryIds, handleGalleryIds] = useState([]);

  useEffect(() => {
    api
      .fetch(`v1/galleries`)
      .then((response) => {
        if (response && response.data !== []) {
          handleGalleries(response.data);

          //Reshape array for table
          let galleryRows = [];
          let galleryIds = [];
          response.data.map((gallery) => {
            let status = gallery.published ? 'Published' : 'Draft';
            let created = gallery.createdAt ? gallery.createdAt : 'Unknown';
            let description = gallery.description.substring(0, 29) + '...';
            galleryRows.push([gallery.title, description, status, created]);
            galleryIds.push(gallery._id);
          });
          handleGalleryRows(galleryRows);
          handleGalleryIds(galleryIds);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const CompiledTable = () => {
    return (
      <AdminTable
        resource={'galleries'}
        headers={['Gallery Name', 'Description', 'Status', 'Created']}
        rows={galleryRows}
        rowIds={galleryIds}
      />
    );
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Galleries | Portfolio Admin</title>
      </Helmet>
      <AdminNavigation />
      <AdminMainPage
        title='Galleries'
        primaryTxt='Create New'
        primaryUrl={'/admin/galleries/create'}
        secondaryTxt={'Drafts'}
        secondaryUrl={'#'}
        table={<CompiledTable />}
      />
      <AdminFooter />
    </div>
  );
}

export default AdminGalleryPage;
