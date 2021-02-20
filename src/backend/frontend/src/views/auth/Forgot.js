import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  CssBaseline,
  Grid,
  makeStyles,
  Container,
  Avatar,
  Typography,
  Button,
  TextField,
  Link
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from 'axios';
import { Navigation, Footer } from '../../components/index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  formContainer: {
    marginTop: theme.spacing(18),
    marginBottom: theme.spacing(20)
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function Forgot(props) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const classes = useStyles();

  const forgotHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const { data } = await axios.post('/api/auth/forgot', { email }, config);

      setSuccess(data.data);
      setEmail('');
    } catch (err) {
      setError(err.response.data.error);
      setEmail('');
      setTimeout(() => {
        setError('');
      }, 5000);
      props.history.push('/signin');
    }
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Forgot Password | Trevor's Portfolio</title>
      </Helmet>

      <Navigation />
      <Container
        component='main'
        maxWidth='sm'
        className={classes.formContainer}
      >
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Send Reset Email
          </Typography>
          <form className={classes.form} onSubmit={forgotHandler}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete='email'
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Send Email
            </Button>
            <Grid container justify='flex-end'>
              <Grid item>
                <Link href='/signin' variant='body2'>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
