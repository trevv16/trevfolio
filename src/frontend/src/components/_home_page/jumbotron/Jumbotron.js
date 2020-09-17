import React, { useState } from 'react';
import {
  Box,
  CssBaseline,
  Link,
  Typography,
  makeStyles,
  Grid
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  jumboBox: {
    marginTop: theme.spacing(3),
    overflow: 'hidden'
  },
  jumboMedia: {
    maxWidth: '100%',
    maxHeight: '100%'
  }
}));

function Jumbotron() {
  const classes = useStyles();
  // let [slide, setSlide] = useState(0);
  // const slideshowHandler = () => {
  //   slide += 1;
  // };

  // setInterval(slideshowHandler, 3000);

  return (
    <div>
      <CssBaseline />
      <Grid container xs={12} className={classes.jumboBox}>
        <Grid item xs={12}>
          <img
            src='https://source.unsplash.com/user/erondu/1920x500'
            alt='jumbotron image'
            className={classes.jumboMedia}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Jumbotron;
