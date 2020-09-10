import React from 'react';
import {
  AppBar,
  CssBaseline,
  Link,
  Toolbar,
  useScrollTrigger,
  Slide,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({}));

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
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
            <Typography variant='h4'>Trevor Njeru</Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
}

export default Navigation;
