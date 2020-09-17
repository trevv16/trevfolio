import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
// import {} from '@material-ui/icons';
// import api from '../../utils/api';
import {
  MailingList,
  Navigation,
  Footer,
  Gallery
} from '../../components/index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  main: {
    justifyContent: 'center',
    marginTop: theme.spacing(14),
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

  return (
    <div className={classes.root}>
      <Navigation />

      <Grid container spacing={3} xs={12} className={classes.main}>
        <Grid item xs={10}>
          <Typography
            align='center'
            variant='h1'
            component='h1'
            color='palette.primary.dark'
          >
            About Me
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography
            align='center'
            variant='h6'
            component='h6'
            className={classes.mailDesc}
            color='primary.dark'
          >
            My name is Trevor Njeru, I am a Senior at{' '}
            <strong>University of North Carolina at Charlotte</strong>, studying{' '}
            <strong>Computer Science</strong> with a concentration in{' '}
            <strong>Human Computer Interaction</strong>.
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Gallery />
        </Grid>
      </Grid>
      <Grid container spacing={3} xs={12} className={classes.content}>
        <Grid item xs={10}>
          <Typography
            align='center'
            variant='body1'
            component='body1'
            color='palette.primary.dark'
          >
            I am Kenyan-American, I have lived in North Carolina basically my
            whole life, but I did experience living and going to school in Kenya
            for about 2 years and as a result, I now think on a global scale. My
            career objective is to become a well-sought after software engineer
            in my field eventually utilizing my HCI skills in a senior software
            architecture role to make a global social impact.
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography
            align='center'
            variant='body1'
            component='body1'
            color='palette.primary.dark'
          >
            I am very comfortable with object-oriented programming and have
            experience from school coding in Java, as well I have experience
            working in an Agile environment using dev tools like Git, AWS,
            Heroku, UI tools, Adobe CC, as well I am familiar with conventions
            and best practices.
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography
            align='center'
            variant='body1'
            component='body1'
            color='palette.primary.dark'
          >
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
