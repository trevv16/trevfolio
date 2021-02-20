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

function AdminBlogPage() {
  const classes = useStyles();
  const defaultRows = [
    ['Name', 'Slug', 'Status', 'Created'],
    ['Name', 'Slug', 'Status', 'Created'],
    ['Name', 'Slug', 'Status', 'Created'],
    ['Name', 'Slug', 'Status', 'Created']
  ];
  const [blogs, handleBlogs] = useState([]);
  const [blogRows, handleBlogRows] = useState(defaultRows);
  const [blogIds, handleBlogIds] = useState([]);

  useEffect(() => {
    api
      .fetch(`v1/blogs`)
      .then((response) => {
        if (response && response.data !== []) {
          handleBlogs(response.data);

          //Reshape array for table
          let blogRows = [];
          let blogIds = [];
          response.data.map((blog) => {
            let status = blog.published ? 'Published' : 'Draft';
            let created = blog.createdAt ? blog.createdAt : 'Unknown';
            blogRows.push([blog.title, blog.slug, status, created]);
            blogIds.push(blog._id);
          });
          handleBlogRows(blogRows);
          handleBlogIds(blogIds);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const CompiledTable = () => {
    return (
      <AdminTable
        resource={'blogs'}
        headers={['Blog Name', 'Slug', 'Status', 'Created']}
        rows={blogRows}
        rowIds={blogIds}
      />
    );
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Settings | Portfolio Admin</title>
      </Helmet>
      <AdminNavigation />
      <AdminMainPage
        title='Blogs'
        primaryTxt='Create New'
        primaryUrl={'/admin/blogs/create'}
        secondaryTxt={'Drafts'}
        secondaryUrl={'#'}
        table={<CompiledTable />}
      />
      <AdminFooter />
    </div>
  );
}

export default AdminBlogPage;
