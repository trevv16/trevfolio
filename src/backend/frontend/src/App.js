import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
  SignUp,
  SignIn,
  Forgot,
  Reset,
  ComingSoon,
  Dashboard,
  HomePage,
  AboutPage,
  ResumePage,
  ContactPage,
  ProjectDetailPage,
  ProjectPage,
  DashboardPage,
  SettingsPage,
  AdminBlogPage,
  AdminBlogDetailPage,
  AdminBlogPostPage,
  AdminCreateBlogPostPage,
  AdminProjectPage,
  AdminProjectDetailPage,
  AdminResumePage,
  AdminResumeDetailPage,
  AdminSkillPage,
  AdminSkillDetailPage,
  AdminGalleryPage,
  AdminGalleryDetailPage,
  AdminMessagePage,
  AdminMessageDetailPage,
  AdminMailingListPage,
  AdminMailingListDetailPage
} from './views/index';
import AuthRoute from './AuthRoute';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={ComingSoon} />
          {/* <Route exact path='/' component={HomePage} /> */}
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/resume' component={ResumePage} />
          <Route exact path='/contact' component={ContactPage} />
          <Route exact path='/projects' component={ProjectPage} />
          <Route exact path='/projects/:id' component={ProjectDetailPage} />
          {/*<Route exact path='/projects?skill=' component={Project} />
          <Route path='/skills' component={SkillList} /> */}

          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/forgot' component={Forgot} />
          <Route exact path='/resetpassword/:resetToken' component={Reset} />

          {/* <Route exact path='/blogs' component={Project} />
          <Route exact path='/blogs?' component={Project} />
          <Route exact path='/blogs/blogID' component={Project} />
          <Route exact path='/blogs/blogID/posts' component={Project} />
          <Route exact path='/blogs/blogID/posts/postID' component={Project} /> */}

          {/* ADMIN ROUTES */}
          <AuthRoute exact path='/admin' component={DashboardPage} />
          <AuthRoute exact path='/admin/settings' component={SettingsPage} />

          <AuthRoute exact path='/admin/blogs' component={AdminBlogPage} />
          <AuthRoute
            exact
            path='/admin/blogs/:blogID'
            component={AdminBlogDetailPage}
          />
          <AuthRoute
            exact
            path='/admin/blogs/:blogID/posts/:postID'
            component={AdminBlogPostPage}
          />
          <AuthRoute
            exact
            path='/admin/blogs/posts/create'
            component={AdminCreateBlogPostPage}
          />

          <AuthRoute exact path='/admin/resumes' component={AdminResumePage} />
          <AuthRoute
            exact
            path='/admin/resumes/:resumeID'
            component={AdminResumeDetailPage}
          />
          <AuthRoute
            exact
            path='/admin/resumes/:resumeID/create'
            component={AdminResumeDetailPage}
          />

          <AuthRoute
            exact
            path='/admin/projects'
            component={AdminProjectPage}
          />
          <AuthRoute
            exact
            path='/admin/projects/:projectID'
            component={AdminProjectDetailPage}
          />
          <AuthRoute
            exact
            path='/admin/projects/:projectID/create'
            component={AdminProjectDetailPage}
          />

          <AuthRoute exact path='/admin/skills' component={AdminSkillPage} />
          <AuthRoute
            exact
            path='/admin/skills/:skillID'
            component={AdminSkillDetailPage}
          />
          <AuthRoute
            exact
            path='/admin/skills/:skillID/create'
            component={AdminSkillDetailPage}
          />

          <AuthRoute
            exact
            path='/admin/galleries'
            component={AdminGalleryPage}
          />
          <AuthRoute
            exact
            path='/admin/galleries/:blogID'
            component={AdminGalleryDetailPage}
          />
          <AuthRoute
            exact
            path='/admin/galleries/create'
            component={AdminGalleryDetailPage}
          />

          <AuthRoute
            exact
            path='/admin/messages'
            component={AdminMessagePage}
          />
          <AuthRoute
            exact
            path='/admin/messages/:messageID'
            component={AdminMessageDetailPage}
          />

          <AuthRoute
            exact
            path='/admin/mailing_lists'
            component={AdminMailingListPage}
          />
          <AuthRoute
            exact
            path='/admin/mailing_lists/:listID'
            component={AdminMailingListDetailPage}
          />

          {/* <AuthRoute exact path='/admin/pages' component={Project} />
          <AuthRoute exact path='/admin/pages/pageID' component={Project} />
          <AuthRoute exact path='/admin/pages/pageID/edit' component={Project} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
