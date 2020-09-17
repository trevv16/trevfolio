import React, { Component } from 'react';
import {
  CssBaseline,
  Container,
  Link,
  Typography,
  makeStyles
} from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary'>
      {'Copyright © '}
      <Link color='inherit' href='https://trevornjeru.com/'>
        Trevor Njeru
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '6vh',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800]
  }
}));

function Footer() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <footer className={classes.root}>
        <Copyright />
      </footer>
    </div>
  );
}

export default Footer;
