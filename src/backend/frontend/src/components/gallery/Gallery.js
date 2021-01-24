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

function Gallery(props) {
  const classes = useStyles();
  const normInterval = props.interval ? props.interval : 5500;
  const normTimeout = props.timeout ? props.timeout : 800;
  const normAnimation = props.animation ? props.animation : 'slide';

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Carousel
        navButtonsAlwaysVisible
        animation={normAnimation}
        interval={normInterval}
        timeout={normTimeout}
        className={classes.carousel}
      >
        {props.images.map((img, i) => (
          <img key={i} src={img.src} alt={img.description} />
        ))}
      </Carousel>
    </div>
  );
}

export default Gallery;
