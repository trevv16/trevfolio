import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

import {
  CssBaseline,
  Link,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
// import {} from '@material-ui/icons';
// import api from '../../utils/api';
import { MailingList, Navigation, Footer } from '../index';

// const params = useParams();

export class SkillList extends Component {
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

  render() {
    const classes = this.props;
    return (
      <div className={classes.root}>
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
      </div>
    );
  }
}

export default class Skill extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skillName: null,
      skillQuery: null
    };
  }

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
        </Grid>

        <MailingList />
        <Footer />
      </div>
    );
  }
}
