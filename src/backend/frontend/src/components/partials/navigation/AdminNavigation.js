import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import clsx from 'clsx';
import {
  AppBar,
  CssBaseline,
  Link,
  Toolbar,
  makeStyles,
  useTheme,
  Drawer,
  List,
  Menu,
  MenuItem
} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CreateIcon from '@material-ui/icons/Create';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import WorkIcon from '@material-ui/icons/Work';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ForumIcon from '@material-ui/icons/Forum';
import SettingsIcon from '@material-ui/icons/Settings';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Auth from '../../../Auth';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1
  },
  link: {
    padding: theme.spacing(3, 2),
    color: '#fff'
  },
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function AdminNavigation(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [authEl, setAuthEl] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setIsAuth(Auth.isUserAuthenticated());
  }, []);

  const navText = [
    'Blogs',
    'Resumes',
    'Projects',
    'Skills',
    'Galleries',
    'Pages',
    'Messages'
  ];
  const navIcons = [
    <CreateIcon />,
    <AssignmentIndIcon />,
    <WorkIcon />,
    <BeenhereIcon />,
    <PhotoCameraIcon />,
    <FileCopyIcon />,
    <ForumIcon />
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
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
            href='/admin'
            variant='h6'
            className={classes.link}
          >
            Dashboard
          </Link>
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
              <MenuItem onClick={handleClose} className={classes.menuItem}>
                Profile
              </MenuItem>
            </Link>
            <Link href='#'>
              <MenuItem onClick={signOutHandler} className={classes.menuItem}>
                Sign Out
              </MenuItem>
            </Link>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link href='/admin'>
            <ListItem button key='dashboard'>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary={'Dashboard'} />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          {navText.map((text, i) => (
            <Link href={`/admin/${text.toLowerCase()}`} key={i}>
              <ListItem button key={i}>
                <ListItemIcon>{navIcons[i]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          <Link href='/admin/settings'>
            <ListItem button key='settings'>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary={'Settings'} />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </div>
  );
}

export default AdminNavigation;
