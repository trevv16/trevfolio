import React, { Component } from 'react';
import {} from '@material-ui/core';
import {} from '@material-ui/icons';
import api from '../../utils/api';
import { MailingList, Navigation, Footer } from '../../components/index';

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Navigation />
        <MailingList />
        <Footer />
      </div>
    );
  }
}
