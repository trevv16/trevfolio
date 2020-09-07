const express = require('express');

const router = express.Router();

// Middlewares
const { checkAuth } = require('../middlewares/authControl');

// Controllers
const userCon = require('../controllers/userController');
const projectCon = require('../controllers/projectController');
const galleryCon = require('../controllers/galleryController');
const skillCon = require('../controllers/skillController');
const resumeCon = require('../controllers/resumeController');
const blogCon = require('../controllers/blogController');
const postCon = require('../controllers/postController');
const emailCon = require('../controllers/emailController');
const mailingListCon = require('../controllers/mailingListController');

router.get('/users', checkAuth, userCon.getAll);
router.get('/users/:userID', checkAuth, userCon.get);
router.post('/users/:userID', checkAuth, userCon.create);
router.put('/users/:userID', checkAuth, userCon.update);
router.delete('/users/:userID', checkAuth, userCon.remove);

router.get('/projects', checkAuth, projectCon.getAll);
router.get('/projects/:projectID', checkAuth, projectCon.get);
router.post('/projects/:projectID', checkAuth, projectCon.create);
router.put('/projects/:projectID', checkAuth, projectCon.update);
router.delete('/projects/:projectID', checkAuth, projectCon.remove);

router.get('/galleries', checkAuth, galleryCon.getAll);
router.get('/galleries/:galleryID', checkAuth, galleryCon.get);
router.post('/galleries/:galleryID', checkAuth, galleryCon.create);
router.put('/galleries/:galleryID', checkAuth, galleryCon.update);
router.delete('/galleries/:galleryID', checkAuth, galleryCon.remove);

router.get('/skills', checkAuth, skillCon.getAll);
router.get('/skills/:skillID', checkAuth, skillCon.get);
router.post('/skills/:skillID', checkAuth, skillCon.create);
router.put('/skills/:skillID', checkAuth, skillCon.update);
router.delete('/skills/:skillID', checkAuth, skillCon.remove);

router.get('/resumes', checkAuth, resumeCon.getAll);
router.get('/resumes/:resumeID', checkAuth, resumeCon.get);
router.post('/resumes/:resumeID', checkAuth, resumeCon.create);
router.put('/resumes/:resumeID', checkAuth, resumeCon.update);
router.delete('/resumes/:resumeID', checkAuth, resumeCon.remove);

router.get('/blogs', checkAuth, blogCon.getAll);
router.get('/blogs/:blogID', checkAuth, blogCon.get);
router.post('/blogs/:blogID', checkAuth, blogCon.create);
router.put('/blogs/:blogID', checkAuth, blogCon.update);
router.delete('/blogs/:blogID', checkAuth, blogCon.remove);

router.get('/posts', checkAuth, postCon.getAll);
router.get('/posts/:postID', checkAuth, postCon.get);
router.post('/posts/:postID', checkAuth, postCon.create);
router.put('/posts/:postID', checkAuth, postCon.update);
router.delete('/posts/:postID', checkAuth, postCon.remove);

router.get('/mailing_lists', checkAuth, mailingListCon.getAll);
router.get('/mailing_lists/:mailingListID', checkAuth, mailingListCon.get);
router.post('/mailing_lists/:mailingListID', checkAuth, mailingListCon.create);
router.put('/mailing_lists/:mailingListID', checkAuth, mailingListCon.update);
router.delete(
  '/mailing_lists/:mailingListID',
  checkAuth,
  mailingListCon.remove
);

router.get('/emails', checkAuth, emailCon.getAll);
router.get('/emails/:emailID', checkAuth, emailCon.get);
router.post('/emails/:emailID', checkAuth, emailCon.create);
router.put('/emails/:emailID', checkAuth, emailCon.update);
router.delete('/emails/:emailID', checkAuth, emailCon.remove);

module.exports = router;
