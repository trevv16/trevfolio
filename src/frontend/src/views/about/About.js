import React from 'react';
import { Helmet } from 'react-helmet';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
// import {} from '@material-ui/icons';
// import api from '../../utils/api';
import { MailingList, Navigation, Footer } from '../../components/index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  main: {
    justifyContent: 'center',
    marginTop: theme.spacing(18),
    marginBottom: theme.spacing(8)
  },
  content: {
    marginTop: theme.spacing(4),
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(3)
  }
}));

function About() {
  const classes = useStyles();
  const images = [
    {
      name: 'about_gal_01',
      src: `${process.env.PUB_BUCKET_URL}/pages/about/gallery/about_gal_01.png`,
      description: 'With maasai village'
    },
    {
      name: 'about_gal_02',
      src: `${process.env.PUB_BUCKET_URL}/pages/about/gallery/about_gal_02.png`,
      description: 'With friends in Kenya'
    },
    {
      name: 'about_gal_03',
      src: `${process.env.PUB_BUCKET_URL}/pages/about/gallery/about_gal_03.png`,
      description: 'Raleigh'
    },
    {
      name: 'about_gal_04',
      src: `${process.env.PUB_BUCKET_URL}/pages/about/gallery/about_gal_04.png`,
      description: 'Tyler Perry Studios, Atlanta, GA'
    },
    {
      name: 'about_gal_05',
      src: `${process.env.PUB_BUCKET_URL}/pages/about/gallery/about_gal_05.png`,
      description: 'With Mom'
    }
  ];

  return (
    <div className={classes.root}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>About | Trevor's Portfolio</title>
      </Helmet>
      <Navigation />
      <Grid container spacing={3} className={classes.main}>
        <Grid item xs={10}>
          <Typography align='center' variant='h1' component='h1'>
            About Me
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography
            align='center'
            variant='h6'
            component='h6'
            className={classes.mailDesc}
          >
            My name is Trevor Njeru, I am a Senior at{' '}
            <strong>University of North Carolina at Charlotte</strong>, studying{' '}
            <strong>Computer Science</strong> with a concentration in{' '}
            <strong>Human Computer Interaction</strong>.
          </Typography>
        </Grid>
        <Grid item xs={10}>
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
      <Grid container spacing={3} className={classes.content}>
        <Grid item xs={10}>
          <Typography align='center' variant='body1'>
            I am Kenyan-American, I have lived in North Carolina basically my
            whole life, but I did experience living and going to school in Kenya
            for about 2 years and as a result, I now think on a global scale. My
            career objective is to become a well-sought after software engineer
            in my field eventually utilizing my HCI skills in a senior software
            architecture role to make a global social impact.
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography align='center' variant='body1'>
            I am very comfortable with object-oriented programming and have
            experience from school coding in Java, as well I have experience
            working in an Agile environment using dev tools like Git, AWS,
            Heroku, UI tools, Adobe CC, as well I am familiar with conventions
            and best practices.
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography align='center' variant='body1'>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.
          </Typography>
        </Grid>
      </Grid>

      <MailingList />
      <Footer />
    </div>
  );
}

export default About;
