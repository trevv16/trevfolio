import React from 'react';
import {
  Box,
  CssBaseline,
  Link,
  TextField,
  Button,
  Typography,
  makeStyles
} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
  mailBox: {
    paddingTop: theme.spacing(8)
  },
  mailDesc: {
    marginTop: theme.spacing(3)
  },
  subscribe: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(6)
  },
  subField: {
    width: '50vw'
  },
  subButton: {
    marginLeft: '2vw',
    height: '6vh'
  }
}));

function MailingList() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Box
        component='div'
        spacing={3}
        bgcolor='light'
        height='38vh'
        minWidth='sm'
        className={classes.mailBox}
        boxShadow={4}
      >
        <Typography align='center' variant='h5' component='h5'>
          Join the Newsletter
        </Typography>
        <Typography
          align='center'
          variant='h6'
          component='h6'
          className={classes.mailDesc}
        >
          Subscribe to my newsletter if you would like to keep up with my
          projects, blog or any other updates.
        </Typography>

        <Box className={classes.subscribe}>
          <TextField
            id='email-subscribe'
            label='Email'
            variant='outlined'
            className={classes.subField}
            placeholder='example@email.com'
            type='email'
            color='secondary'
            autoComplete='email'
          />
          <Button
            variant='contained'
            color='secondary'
            size='large'
            href='#'
            className={classes.subButton}
            startIcon={<EmailIcon />}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default MailingList;
