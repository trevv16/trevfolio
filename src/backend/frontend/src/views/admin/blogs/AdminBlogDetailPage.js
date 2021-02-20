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

function AdminBlogDetailPage(props) {
  const classes = useStyles();
  const _id = props.match.params.blogID;
  const defaultRows = [
    ['Title', 'Slug', 'Status', 'Created'],
    ['Title', 'Slug', 'Status', 'Created'],
    ['Title', 'Slug', 'Status', 'Created'],
    ['Title', 'Slug', 'Status', 'Created'],
    ['Title', 'Slug', 'Status', 'Created']
  ];
  const [blogs, handleBlogs] = useState([]);
  const [blogRows, handleBlogRows] = useState(defaultRows);
  const [blogIds, handleBlogIds] = useState([]);

  useEffect(() => {
    api
      .fetch(`v1/blogs/${_id}/posts`)
      .then((response) => {
        if (response && response.data !== {}) {
          handleBlogs(response.data);
          let posts =
            response.data.posts && response.data.posts !== []
              ? response.data.posts
              : [];

          //Reshape array for table
          let blogRows = [];
          let blogIds = [];
          console.log(response);
          posts.map((post) => {
            let status = post.published ? 'Published' : 'Draft';
            let created = post.createdAt ? post.createdAt : 'Unknown';
            blogRows.push([post.title, post.slug, status, created]);
            blogIds.push(post._id);
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
        headers={['Post Title', 'Slug', 'Status', 'Created']}
        rows={blogRows}
        rowIds={blogIds}
      />
    );
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Blog Detail | Portfolio Admin</title>
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

export default AdminBlogDetailPage;
