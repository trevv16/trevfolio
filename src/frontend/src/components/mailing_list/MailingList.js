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

function MailingList() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Box
        component='div'
        spacing={3}
        bgcolor='success.light'
        height='40vh'
        minWidth='sm'
        className={classes.jumboBox}
        boxShadow={4}
      >
        Mailing List
      </Box>
    </div>
  );
}

export default MailingList;
