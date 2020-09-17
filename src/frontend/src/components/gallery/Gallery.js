import React from 'react';
import { CssBaseline, makeStyles } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10)
  },
  carousel: {}
}));

function Gallery() {
  const classes = useStyles();
  const images = [
    {
      name: 'image1',
      src: 'https://source.unsplash.com/random/1080x1080',
      description: 'Picture of me'
    },
    {
      name: 'image2',
      src: 'https://source.unsplash.com/random/1080x1080',
      description: 'Picture of me'
    },
    {
      name: 'image2',
      src: 'https://source.unsplash.com/random/1080x1080',
      description: 'Picture of me'
    }
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Carousel
        navButtonsAlwaysVisible
        animation='slide'
        className={classes.carousel}
      >
        {images.map((src, description, i) => (
          <img key={i} src={src} alt={description} />
        ))}
      </Carousel>
    </div>
  );
}

export default Gallery;
