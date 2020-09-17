import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import {  } from '@material-ui/core';

import { Home, About, Resume, Contact, SkillList, Skill } from './views/index';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/contact' component={Contact} />
          <Route path='/skill' component={SkillList} />
          <Route path='/skill?' component={Skill} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
