import React from 'react';
import {
  Box,
  CssBaseline,
  Link,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  introBox: {
    // marginTop: theme.spacing(8)
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
        bgcolor='warning.light'
        height='60vh'
        minWidth='sm'
        className={classes.introBox}
        boxShadow={4}
      >
        Introduction
      </Box>
    </div>
  );
}

export default Introduction;
