import React from 'react';
import {
  AppBar,
  CssBaseline,
  Link,
  Toolbar,
  useScrollTrigger,
  Slide,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1
  },
  link: {
    padding: theme.spacing(3, 2),
    color: '#fff'
  }
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

function Navigation(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Link
              component='a'
              href='/'
              variant='h4'
              color='secondary'
              className={classes.headline}
              underline='hover'
            >
              Trevor Njeru
            </Link>
            <div className={classes.grow} />
            <Link
              component='a'
              href='/about'
              variant='h6'
              className={classes.link}
            >
              About
            </Link>
            <Link
              component='a'
              href='/projects'
              variant='h6'
              className={classes.link}
            >
              Projects
            </Link>
            <Link
              component='a'
              href='/contact'
              variant='h6'
              className={classes.link}
            >
              Contact
            </Link>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
}

export default Navigation;