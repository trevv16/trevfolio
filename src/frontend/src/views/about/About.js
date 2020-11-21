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
      src: `https://trevfolio-pub.s3.us-east-2.amazonaws.com/pages/about/gallery/about_gal_01.png`,
      description: 'With maasai village'
    },
    {
      name: 'about_gal_02',
      src: `https://trevfolio-pub.s3.us-east-2.amazonaws.com/pages/about/gallery/about_gal_02.png`,
      description: 'With friends in Kenya'
    },
    {
      name: 'about_gal_03',
      src: `https://trevfolio-pub.s3.us-east-2.amazonaws.com/pages/about/gallery/about_gal_03.png`,
      description: 'Raleigh'
    },
    {
      name: 'about_gal_04',
      src: `https://trevfolio-pub.s3.us-east-2.amazonaws.com/pages/about/gallery/about_gal_04.png`,
      description: 'Tyler Perry Studios, Atlanta, GA'
    },
    {
      name: 'about_gal_05',
      src: `https://trevfolio-pub.s3.us-east-2.amazonaws.com/pages/about/gallery/about_gal_05.png`,
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
            variant='h3'
            component='h3'
            className={classes.mailDesc}
          >
            My Name is Trevor Njeru, I am a self-taught full stack developer and
            senior Computer Science student with a concentration in
            Human-Computer Interaction, and I am both a Kenyan and American
            citizen.
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
            I have lived in North Carolina basically my whole life, but I did
            experience living and going to school in Kenya for about 2 years. As
            a result, I have a focus on learning skills for an international
            marketplace.
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography align='center' variant='body1'>
            I am very comfortable with core computer science concepts like
            logic, data structures & algorithms, security fundamentals, and
            software architecture.
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography align='center' variant='body1'>
            With my full stack skills, I have built projects using
            Node/Express/React/MongoDB, as well as MySQL and Python, deployed to
            AWS services with CI/CD.
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography align='center' variant='body1'>
            As well I have experience working in an Agile environment using dev
            tools like Git, Github Actions, AWS, Heroku, and UI skills with
            Figma, and multiple Adobe CC programs.
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography align='center' variant='body1'>
            My career objective is to become a well-sought after software
            engineer in my field, utilizing my HCI skills in a software
            architecture role to make a social impact.
          </Typography>
        </Grid>
      </Grid>

      <MailingList />
      <Footer />
    </div>
  );
}

export default About;
