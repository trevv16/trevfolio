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

export default function Reset(props) {
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const classes = useStyles();

  const resetHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    if (password !== confirm_password) {
      setPassword('');
      setConfirmPassword('');
      setTimeout(() => {
        setError('');
      }, 5000);
      return setError('Passwords do not match');
    }

    try {
      const { data } = await axios.put(
        `/api/auth/reset/${props.match.params.resetToken}`,
        { password },
        config
      );

      setSuccess(data.data);
      props.history.push('/signin');
    } catch (err) {
      console.log(err);
      setError(err.response.data.error);
      setTimeout(() => {
        setError('');
      }, 5000);
      props.history.push('/');
    }
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Reset Password | Trevor's Portfolio</title>
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
            Reset Password
          </Typography>
          <form className={classes.form} onSubmit={resetHandler}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  tabIndex={1}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  name='confirm_password'
                  label='Confirm Password'
                  type='password'
                  id='confirm_password'
                  value={confirm_password}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  tabIndex={2}
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
