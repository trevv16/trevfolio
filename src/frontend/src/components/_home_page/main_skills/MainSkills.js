import React from 'react';
import {
  Box,
  CssBaseline,
  Link,
  Grid,
  Paper,
  Typography,
  makeStyles,
  Button
} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme) => ({
  jumboBox: {
    paddingTop: theme.spacing(8)
  },
  description: {
    marginTop: theme.spacing(3)
  },
  skillGrid: {
    padding: theme.spacing(8)
  },
  skill: {
    display: 'flex',
    width: '100px',
    height: '100px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2)
  },
  gridRoot: {
    flexGrow: 1
  },
  skillButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(4, 0)
  }
}));

function Skill(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Link component='a' href='#' variant='body2'>
        <Paper elevation={3} className={classes.skill}>
          <img src={props.imgSrc} alt={props.altText} />
        </Paper>
      </Link>
    </React.Fragment>
  );
}

function GenGrid(props) {
  var html = [];
  for (let index = 0; index < props.size; index++) {
    html.push(
      <Grid item key={index}>
        <Skill
          imgSrc='https://source.unsplash.com/user/erondu/80x80'
          altText='skill icon'
        />
      </Grid>
    );
  }
  return html;
}

function MainSkills() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Box
        component='div'
        bgcolor='light.light'
        height='auto'
        minWidth='sm'
        className={classes.jumboBox}
      >
        <Typography align='center' variant='h3' component='h3'>
          Highlighted Skills
        </Typography>
        <Typography
          align='center'
          variant='h6'
          component='h6'
          className={classes.description}
        >
          This section details all my skills and serves as menu to navigate
          through my different projects.
        </Typography>
        <Box minWidth='sm' className={classes.skillGrid}>
          <Grid container className={classes.gridRoot} spacing={8}>
            <GenGrid size={22} />
          </Grid>
        </Box>
        <Box className={classes.skillButton}>
          <Button
            variant='contained'
            color='secondary'
            size='large'
            href='#'
            className={classes.skillButton}
            endIcon={<ChevronRightIcon />}
          >
            View All
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default MainSkills;
