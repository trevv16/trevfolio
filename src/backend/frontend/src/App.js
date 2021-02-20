import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Home,
// About,
// Resume,
// Contact,
// ProjectDetail,
// Project,

import {
  SignUp,
  SignIn,
  Forgot,
  Reset,
  ComingSoon,
  Dashboard
} from './views/index';
import AuthRoute from './AuthRoute';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={ComingSoon} />
          {/* <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/projects' component={Project} />
          <Route exact path='/projects/:id' component={ProjectDetail} /> */}

          {/*<Route exact path='/projects?skill=' component={Project} />
          <Route path='/skills' component={SkillList} /> */}

          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/forgot' component={Forgot} />
          <Route exact path='/resetpassword/' component={Reset} />

          {/* <Route exact path='/blogs' component={Project} />
          <Route exact path='/blogs?' component={Project} />
          <Route exact path='/blogs/blogID' component={Project} />
          <Route exact path='/blogs/blogID/posts' component={Project} />
          <Route exact path='/blogs/blogID/posts/postID' component={Project} /> */}

          {/* ADMIN ROUTES */}
          <AuthRoute exact path='/admin' component={Dashboard} />
          {/* <Route exact path='/admin/settings' component={Project} /> */}

          {/* <Route exact path='/admin/blogs' component={Project} />
          <Route exact path='/admin/blogs/blogID' component={Project} />
          <Route exact path='/admin/blogs/blogID/edit' component={Project} />
          <Route exact path='/admin/blogs/blogID/posts' component={Project} />
          <Route exact path='/admin/blogs/blogID/posts/postID' component={Project} />
          <Route exact path='/admin/blogs/blogID/posts/postID/edit' component={Project} /> */}

          {/* <Route exact path='/admin/projects' component={Project} />
          <Route exact path='/admin/projects/projectID' component={Project} />
          <Route exact path='/admin/projects/projectID/edit' component={Project} /> */}

          {/* <Route exact path='/admin/mailing_lists' component={Project} />
          <Route exact path='/admin/mailing_lists/listID' component={Project} />
          <Route exact path='/admin/mailing_lists/listID/sent' component={Project} />
          <Route exact path='/admin/mailing_lists/listID/sent/sentID' component={Project} />
          <Route exact path='/admin/mailing_lists/listID/drafts' component={Project} />
          <Route exact path='/admin/mailing_lists/listID/drafts/draftID' component={Project} /> */}

          {/* <Route exact path='/admin/messages' component={Project} />
          <Route exact path='/admin/messages/messageID' component={Project} />
          <Route exact path='/admin/messages/messageID/draft' component={Project} /> */}

          {/* <Route exact path='/admin/skills' component={Project} />
          <Route exact path='/admin/skills/skillID' component={Project} />
          <Route exact path='/admin/skills/skillID/edit' component={Project} /> */}

          {/* <Route exact path='/admin/pages' component={Project} />
          <Route exact path='/admin/pages/pageID' component={Project} />
          <Route exact path='/admin/pages/pageID/edit' component={Project} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
