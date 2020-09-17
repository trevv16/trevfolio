import React from 'react';
import { Box, CssBaseline, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  jumboBox: {
    // marginTop: theme.spacing(8)
  }
}));

function RecentProjects() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Box
        component='div'
        spacing={3}
        bgcolor='info.light'
        height='90vh'
        minWidth='sm'
        className={classes.jumboBox}
        boxShadow={4}
      >
        Recent Projects
      </Box>
    </div>
  );
}

export default RecentProjects;
