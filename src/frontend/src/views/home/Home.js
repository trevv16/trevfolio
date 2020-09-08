import React, { Component } from 'react';
// import {} from '@material-ui/core';
// import {} from '@material-ui/icons';
// import api from '../../utils/api';
import {
  Introduction,
  Jumbotron,
  RecentProjects,
  MainSkills,
  MailingList,
  Navigation,
  Footer
} from '../../components/index';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Navigation />
        <Jumbotron />
        <Introduction />
        <MainSkills />
        <RecentProjects />
        <MailingList />
        <Footer />
      </div>
    );
  }
}
