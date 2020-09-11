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
        <Typography align='center' variant='h3' component='h3'>
          Hi, im Trevor Njeru
        </Typography>
        <Typography
          align='center'
          variant='h6'
          component='h6'
          className={classes.description}
        >
          A computer science student based in Charlotte, NC.
        </Typography>

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
