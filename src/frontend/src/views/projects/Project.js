import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { CssBaseline, Grid, makeStyles, Typography } from '@material-ui/core';
import _ from 'underscore';
import api from '../../utils/api';
import {
  MailingList,
  Navigation,
  Footer,
  ProjectCard
} from '../../components/index';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1
//   },
//   main: {
//     marginTop: theme.spacing(18),
//     marginBottom: theme.spacing(2)
//   }
// }));

export default class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: []
    };

    this.fetchProjects = this.fetchProjects.bind(this);
  }

  fetchProjects = () => {
    return Promise.resolve(
      api
        .fetch(`v1/projects`)
        .then((response) => {
          return _.first(response.data, 4);
        })
        .catch((err) => {
          console.log(err);
        })
    );
  };

  componentDidMount() {
    this.fetchProjects()
      .then((data) => {
        this.setState({
          projects: [...data]
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const classes = this.props;
    // console.log('Projects: ', this.state.projects);
    return (
      <div className={classes.root}>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Projects | Trevor's Portfolio</title>
        </Helmet>
        <CssBaseline />
        <Navigation />
        <Grid container spacing={1} className={classes.main}>
          <Grid item xs={12}>
            <Typography align='center' variant='h1'>
              Projects
            </Typography>
          </Grid>
          <Grid container spacing={4} className={classes.main}>
            {this.state.projects.map((proj, i) => {
              console.log('proj', proj);
              return (
                <Grid item xs={6} key={i}>
                  <ProjectCard project={proj} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <MailingList />
        <Footer />
      </div>
    );
  }
}

// function Project(props) {
//   const classes = useStyles();
//   // let projectData = [];
//   const projectData = fetchProjects()
//     .then((data) => {
//       return data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   return (
//     <div className={classes.root}>
//       <Helmet>
//         <meta charSet='utf-8' />
//         <title>Projects | Trevor's Portfolio</title>
//       </Helmet>
//       <CssBaseline />
//       <Navigation />
//       <Grid container spacing={1} className={classes.main}>
//         <Grid item xs={12}>
//           <Typography align='center' variant='h1'>
//             Projects
//           </Typography>
//         </Grid>
//         <Grid container spacing={4} className={classes.main}>
//           {projectData.map((proj, i) => {
//             return (
//               <Grid item xs={6}>
//                 <ProjectCard key={i} project={proj} />,
//               </Grid>
//             );
//           })}
//         </Grid>
//       </Grid>
//       <MailingList />
//       <Footer />
//     </div>
//   );
// }

// export default Project;
