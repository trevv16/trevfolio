import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

import { Home, About, Resume, Contact } from './views/index';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
