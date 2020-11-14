import React from 'react';
import { CssBaseline, makeStyles, Grid } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles((theme) => ({
  jumboBox: {
    marginTop: theme.spacing(3),
    overflow: 'hidden'
  },
  carousel: {
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '100%',
    maxHeight: '100%'
  }
}));

function Jumbotron() {
  const classes = useStyles();
  const images = [
    {
      name: 'image1',
      src: 'https://source.unsplash.com/random/1920x600',
      description: 'Trev'
    },
    {
      name: 'image2',
      src: 'https://source.unsplash.com/random/1920x600',
      description: 'Trev'
    },
    {
      name: 'image2',
      src: 'https://source.unsplash.com/random/1920x600',
      description: 'Trev'
    }
  ];

  return (
    <div>
      <CssBaseline />
      <Grid container className={classes.jumboBox}>
        <Grid item xs={12}>
          <Carousel
            navButtonsAlwaysVisible
            animation='slide'
            interval={5500}
            timeout={800}
            className={classes.carousel}
          >
            {images.map((img, i) => (
              <img key={i} src={img.src} alt={img.description} />
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </div>
  );
}

export default Jumbotron;
