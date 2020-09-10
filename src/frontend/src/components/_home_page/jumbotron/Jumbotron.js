import React from 'react';
import {
  Box,
  CssBaseline,
  Link,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  jumboBox: {
    marginTop: theme.spacing(8)
  }
}));

function Jumbotron() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Box
        component='div'
        spacing={3}
        bgcolor='secondary.light'
        height='60vh'
        minWidth='sm'
        className={classes.jumboBox}
        boxShadow={4}
      >
        Jumbotron
      </Box>
    </div>
  );
}

export default Jumbotron;
