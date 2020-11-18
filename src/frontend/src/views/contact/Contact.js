import React from 'react';
import { Helmet } from 'react-helmet';
import {
  CssBaseline,
  Grid,
  TextField,
  Button,
  Typography,
  makeStyles
} from '@material-ui/core';
// import {} from '@material-ui/icons';
// import api from '../../utils/api';
import { MailingList, Navigation, Footer } from '../../components/index';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  main: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(18),
    marginBottom: theme.spacing(2)
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(8, 0)
  },
  messageBox: {
    // padding: theme.spacing(8),
    margin: theme.spacing(18)
  },
  messageDesc: {
    marginTop: theme.spacing(3)
  },
  nameField: {
    width: '100%'
  },
  emailField: {
    width: '100%'
  },
  subButton: {
    justifyContent: 'end',
    alignItems: 'center',
    height: '6vh'
  }
}));

function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Contact | Trevor's Portfolio</title>
      </Helmet>
      <CssBaseline />
      <Navigation />

      <Grid container xs={12} spacing={1} className={classes.main}>
        <Grid item xs={10}>
          <Typography align='center' variant='h1' component='h1'>
            Send a Message
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography
            align='center'
            variant='h6'
            component='h6'
            className={classes.messageDesc}
          >
            If you have a question or would like to get in contact with me,
            reach out to me here.
          </Typography>
        </Grid>
        <form method='POST' action='/api/v1/inquiries'>
          <Grid container spacing={2} className={classes.form}>
            <Grid item xs={5}>
              <TextField
                id='first-name'
                label='First Name'
                variant='outlined'
                name='first_name'
                className={classes.nameField}
                placeholder='Elon'
                type='text'
                color='secondary'
                autoComplete='name'
              />
            </Grid>

            <Grid item xs={5}>
              <TextField
                id='last-name'
                label='Last Name'
                name='last_name'
                variant='outlined'
                className={classes.nameField}
                placeholder='Musk'
                type='text'
                color='secondary'
                autoComplete='family-name'
              />
            </Grid>

            <Grid item xs={10}>
              <TextField
                id='email'
                label='Email'
                variant='outlined'
                name='email'
                className={classes.emailField}
                placeholder='example@email.com'
                type='email'
                color='secondary'
                autoComplete='email'
              />
            </Grid>

            <Grid item xs={10}>
              <TextField
                id='message'
                label='Message'
                variant='outlined'
                name='message'
                multiline
                rows={6}
                className={classes.emailField}
                placeholder='Your Message Here'
                type='textarea'
                color='secondary'
                autoComplete='email'
              />
            </Grid>

            <Grid item xs={10}>
              <Button
                variant='contained'
                color='secondary'
                size='large'
                type='submit'
                className={classes.subButton}
                startIcon={<EmailIcon />}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <MailingList />
      <Footer />
    </div>
  );
}

export default Contact;
