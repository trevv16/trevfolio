import React from 'react';
import {
  CssBaseline,
  Link,
  Typography,
  makeStyles,
  Grid
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '6vh',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800]
  },
  icon_group: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(4)
  },
  social_icons: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '2vw',
    height: 'auto',
    opacity: '.4'
  }
}));

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

function Icons() {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        {/* Github */}
        <Link href='https://github.com/trevv16'>
          <img
            className={classes.social_icons}
            src='https://trevfolio-pub.s3.us-east-2.amazonaws.com/assets/github_icon.png'
            alt='github icon'
          />
        </Link>
      </Grid>
      <Grid item xs={4}>
        {/* LinkedIn */}
        <Link href='https://linkedin.com/in/trevornjeru'>
          <img
            className={classes.social_icons}
            src='https://trevfolio-pub.s3.us-east-2.amazonaws.com/assets/linkedin_icon.png'
            alt='linkedin icon'
          />
        </Link>
      </Grid>
      <Grid item xs={4}>
        {/* Instagram */}
        <Link href='https://trevfolio-pub.s3.us-east-2.amazonaws.com/assets/trevva_'>
          <img
            className={classes.social_icons}
            src='https://trevfolio-pub.s3.us-east-2.amazonaws.com/assets/instagram_icon.png'
            alt='instagram icon'
          />
        </Link>
      </Grid>
    </Grid>
  );
}

function AdminFooter() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <footer className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.icon_group}>
            <Icons />
          </Grid>
          <Grid item xs={12}>
            <Copyright />
          </Grid>
        </Grid>
      </footer>
    </div>
  );
}

export default AdminFooter;
