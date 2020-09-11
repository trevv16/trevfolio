import React, { useState } from 'react';
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
  // let [slide, setSlide] = useState(0);
  // const slideshowHandler = () => {
  //   slide += 1;
  // };

  // setInterval(slideshowHandler, 3000);

  return (
    <div>
      <CssBaseline />
      <Box
        component='div'
        spacing={3}
        bgcolor='gray.dark'
        height='59vh'
        minWidth='sm'
        className={classes.jumboBox}
        boxShadow={4}
      >
        <img
          src='https://source.unsplash.com/user/erondu/2560x530'
          alt='jumbotron image'
        />
      </Box>
    </div>
  );
}

export default Jumbotron;
