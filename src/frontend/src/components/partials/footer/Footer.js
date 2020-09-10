import React, { Component } from 'react';
import {
  CssBaseline,
  Container,
  Link,
  Typography,
  withStyles
} from '@material-ui/core';

function Copyright() {
  return (
    <React.Fragment>
      <Typography variant='body2' color='textSecondary'>
        {'Copyright © '}
        <Link color='inherit' href='https://trevornjeru.com/'>
          Trevor Njeru
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </React.Fragment>
  );
}

const useStyles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800]
  }
});

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <footer className={classes.footer}>
          <Container maxWidth='sm'>
            <Copyright />
          </Container>
        </footer>
      </div>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(Footer);
