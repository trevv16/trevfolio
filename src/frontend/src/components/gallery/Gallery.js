import React from 'react';
import { CssBaseline, makeStyles } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10)
  },
  carousel: {
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

function Gallery() {
  const classes = useStyles();
  const images = [
    {
      name: 'image1',
      src: 'https://source.unsplash.com/random/1600x600',
      description: 'Trev'
    },
    {
      name: 'image2',
      src: 'https://source.unsplash.com/random/1600x600',
      description: 'Trev'
    },
    {
      name: 'image2',
      src: 'https://source.unsplash.com/random/1600x600',
      description: 'Trev'
    }
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
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
    </div>
  );
}

export default Gallery;
