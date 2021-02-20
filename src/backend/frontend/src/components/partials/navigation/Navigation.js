import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  AppBar,
  CssBaseline,
  Link,
  Toolbar,
  useScrollTrigger,
  Slide,
  makeStyles,
  Menu,
  MenuItem
} from '@material-ui/core';
import Auth from '../../../Auth';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1
  },
  link: {
    padding: theme.spacing(3, 2),
    color: '#fff'
  },
  menuItem: {
    fontSize: '22px'
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
  const [authEl, setAuthEl] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setIsAuth(Auth.isUserAuthenticated());
  }, []);

  const handleClick = (event) => {
    setAuthEl(event.currentTarget);
  };

  const handleClose = () => {
    setAuthEl(null);
  };

  const signOutHandler = () => {
    Auth.deauthenticateUser();
    return <Redirect to='/signin' />;
  };

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
            {isAuth && (
              <React.Fragment>
                <Link
                  component='a'
                  href='#'
                  variant='h6'
                  className={classes.link}
                  aria-controls='auth-menu'
                  aria-haspopup='true'
                  onClick={handleClick}
                >
                  Account
                </Link>
                <Menu
                  id='auth-menu'
                  anchorEl={authEl}
                  keepMounted
                  open={Boolean(authEl)}
                  onClose={handleClose}
                >
                  <Link href='/profile'>
                    <MenuItem
                      onClick={handleClose}
                      className={classes.menuItem}
                    >
                      Profile
                    </MenuItem>
                  </Link>
                  <Link href='#'>
                    <MenuItem
                      onClick={signOutHandler}
                      className={classes.menuItem}
                    >
                      Sign Out
                    </MenuItem>
                  </Link>
                </Menu>
              </React.Fragment>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
}

export default Navigation;
