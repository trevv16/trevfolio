import React from 'react';
import {
  Box,
  Button,
  CssBaseline,
  Link,
  Typography,
  makeStyles
} from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import GestureIcon from '@material-ui/icons/Gesture';

const useStyles = makeStyles((theme) => ({
  introBox: {
    paddingTop: theme.spacing(8)
  },
  description: {
    marginTop: theme.spacing(3)
  },
  options: {
    display: 'inline-flex',
    justifyContent: 'center',
    width: '100%'
  },
  introOption: {
    margin: theme.spacing(10)
  }
}));

function Introduction() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Box
        component='div'
        spacing={3}
        bgcolor='primary.dark'
        color='light.main'
        minHeight='40vh'
        minWidth='sm'
        className={classes.introBox}
        boxShadow={4}
      >
        <Typography
          align='center'
          variant='h2'
          component='h2'
          color='primary.dark'
        >
          Hi, im Trevor Njeru
        </Typography>
        <Typography
          align='center'
          variant='h4'
          component='h4'
          className={classes.description}
        >
          A computer science student based in Charlotte, NC. Enhancing my skills
          as a full stack developer with a keen interest in design.
        </Typography>
        <Typography
          align='center'
          variant='h5'
          component='h5'
          className={classes.description}
        >
          I made this site using{' '}
          <Link href='#' color='secondary'>
            Node js
          </Link>
          ,{' '}
          <Link href='#' color='secondary'>
            Express
          </Link>
          ,{' '}
          <Link href='#' color='secondary'>
            React
          </Link>
          ,{' '}
          <Link href='#' color='secondary'>
            Material UI
          </Link>
          , and{' '}
          <Link href='#' color='secondary'>
            MongoDB
          </Link>
          . It is unit tested with{' '}
          <Link href='#' color='secondary'>
            Jest
          </Link>
          , deployed with{' '}
          <Link href='#' color='secondary'>
            Docker
          </Link>
          , and{' '}
          <Link href='#' color='secondary'>
            Github Actions
          </Link>{' '}
          to an{' '}
          <Link href='#' color='secondary'>
            AWS EC2
          </Link>{' '}
          instance.
        </Typography>
        {/* <Typography
          align='center'
          variant='h6'
          component='h6'
          className={classes.description}
        >
          I made this to include functionality like Authentication, Docker
          Virtualization, Continuous Integration, Continuous Deployment, Unit
          Testing, and <strong>more</strong>.
        </Typography> */}

        <Box className={classes.options}>
          <Box className={classes.introOption}>
            <Button
              variant='outlined'
              color='secondary'
              size='large'
              href='#'
              className={classes.skillButton}
              endIcon={<GestureIcon />}
            >
              View Design Projects
            </Button>
          </Box>
          <Box className={classes.introOption}>
            <Button
              variant='outlined'
              color='secondary'
              size='large'
              href='#'
              className={classes.skillButton}
              endIcon={<CodeIcon />}
            >
              View Code Projects
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Introduction;
