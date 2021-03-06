import React, { Component } from 'react';

import {
  CssBaseline,
  Link,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import { MailingList, Navigation, Footer } from '../../components/index';

export default class Resume extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  props = makeStyles((theme) => ({
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

  render() {
    const classes = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Navigation />

        <Grid container xs={12} spacing={1} className={classes.main}>
          <Grid item xs={10}>
            <Typography align='center' variant='h1' component='h1'>
              Resume
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
              reach out to me{' '}
              <Link href='/contact' color='secondary'>
                here
              </Link>
              .
            </Typography>
          </Grid>
        </Grid>

        <MailingList />
        <Footer />
      </div>
    );
  }
}
