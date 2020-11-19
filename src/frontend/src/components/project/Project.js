import React, { Component, useState } from 'react';
import { Link, Grid, Typography, makeStyles } from '@material-ui/core';
// import {} from '@material-ui/icons';

// const params = useParams();

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(18),
    marginBottom: theme.spacing(2)
  },
  project: {
    backgroundColor: theme.palette.primary,
    border: 'none',
    borderRadius: '10px',
    padding: theme.spacing(1)
  },
  published: {
    border: `1px solid ${theme.palette.primary.light}`,
    borderRadius: '6px',
    fontSize: '2rem',
    padding: theme.spacing(2),
    height: 'auto',
    textTransform: 'uppercase'
  },
  thumbnail: {
    width: '100%',
    height: 'auto',
    padding: 0
  }
}));

export function ProjectHighlight(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4} className={classes.main}>
        {props.projects.map((proj, i) => {
          return (
            <Grid
              item
              xs={
                12 / props.projects.length > 3 ? 12 / props.projects.length : 3
              }
              key={i}
            >
              <Grid
                container
                spacing={1}
                className={classes.project}
                // className={classes.root}
              >
                <Grid item xs={12}>
                  <img
                    src={proj.thumbnail}
                    alt='project thumbnail'
                    className={classes.thumbnail}
                  />
                </Grid>
                <Grid item xs={10}>
                  <Typography component='h3' variant='h3'>
                    <Link href={`/projects/${proj._id}`} color='secondary'>
                      {proj.title}
                    </Link>
                  </Typography>
                </Grid>
                <Grid item xs={2} className={classes.published}>
                  <Typography component='h5' variant='h5'>
                    {proj.published}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='body2'>{proj.description}</Typography>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

const addStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(18),
    marginBottom: theme.spacing(1)
  },
  project: {
    backgroundColor: '#e1e4f1',
    border: 'none',
    borderRadius: '10px',
    padding: theme.spacing(1),
    height: 'auto'
  },
  published: {
    border: `1px solid ${theme.palette.primary.light}`,
    borderRadius: '6px',
    fontSize: '2rem',
    padding: theme.spacing(2),
    height: 'auto',
    textTransform: 'uppercase',
    color: theme.palette.primary.light
  },
  thumbnail: {
    width: '100%',
    height: 'auto',
    padding: 0
  },
  skillList: {
    display: 'inline-flex'
  },
  skill: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(1),
    position: 'relative'
  },
  skillImg: {
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center'
  },
  skillName: {
    background: 'rgb(237,243,253)',
    // eslint-disable-next-line
    background:
      'linear-gradient(90deg, rgba(237,243,253,0.75) 1%, rgba(225,228,241,1) 50%, rgba(237,243,253,0.7511379551820728) 100%)',
    color: 'theme.palette.primary.light',
    left: '0',
    padding: theme.spacing(2),
    position: 'absolute',
    textTransform: 'uppercase',
    top: '0'
  }
}));

export default function ProjectCard(props) {
  const classStyles = addStyles();
  const skillList = props.project.skills;
  const skillWidth = 12 / props.project.skills.length || 3;
  const [hover, handleHover] = useState(false);

  const handleMouseOver = (ctx, skill) => {
    ctx.currentTarget.src = skill.thumbnail; //replace with hover
    handleHover(!hover);
  };

  const handleMouseOut = (ctx, skill) => {
    ctx.currentTarget.src = skill.thumbnail; //replace with pre
    handleHover(!hover);
  };

  return (
    <div className={classStyles.root}>
      <Grid container spacing={1} className={classStyles.project}>
        <Grid item xs={12}>
          <img
            src={props.project.thumbnail}
            alt='project thumbnail'
            className={classStyles.thumbnail}
          />
        </Grid>
        <Grid item xs={10}>
          <Typography component='h3' variant='h3'>
            <Link href={`/projects/${props.project._id}`} color='secondary'>
              {props.project.title}
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={2} className={classStyles.published}>
          <Typography variant='h5'>
            {props.project.published ? 'Active' : 'Draft'}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body2'>{props.project.description}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography component='h4' variant='h4'>
            <strong>Skills Used</strong>
          </Typography>
        </Grid>
        <Grid item xs={11} className={classStyles.skillList}>
          {skillList.map((skill, i) => {
            return (
              <Grid
                key={i}
                item
                xs={skillWidth > 3 ? skillWidth : 3}
                className={classStyles.skill}
              >
                {/* TODO: Replace with Skill component pass props */}
                {hover && (
                  <div onMouseOut={(e) => handleMouseOut(e, skill)}>
                    <Grid item xs={12} className={classStyles.skillImg}>
                      <img
                        src={skill.thumbnail} // change to thumbnail.hover only
                        alt={`${skill.name} icon`}
                        onMouseOver={(e) => handleMouseOver(e, skill)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        component='h6'
                        variant='h6'
                        className={classStyles.skillName}
                      >
                        {skill.name}
                      </Typography>
                    </Grid>
                  </div>
                )}
                {!hover && (
                  <Grid
                    item
                    xs={12}
                    className={classStyles.skillImg}
                    onMouseOut={(e) => handleMouseOut(e, skill)}
                  >
                    <img
                      src={skill.thumbnail} // change to thumbnail.pre only
                      alt={`${skill.name} icon`}
                      onMouseOver={(e) => handleMouseOver(e, skill)}
                    />
                  </Grid>
                )}
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
}

export class ProjectDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skillName: null,
      skillQuery: null
    };
  }

  props = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    main: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: theme.spacing(18),
      marginBottom: theme.spacing(2)
    }
  }));

  render() {
    const classes = this.props;
    return (
      <div className={classes.root}>
        <Grid container xs={12} spacing={1} className={classes.main}>
          <Grid item xs={12}></Grid>
        </Grid>
      </div>
    );
  }
}
