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
    // marginTop: theme.spacing(8)
  }
}));

function MainSkills() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Box
        component='div'
        spacing={3}
        bgcolor='secondary.light'
        height='90vh'
        minWidth='sm'
        className={classes.jumboBox}
        boxShadow={4}
      >
        Main Skills
      </Box>
    </div>
  );
}

export default MainSkills;
