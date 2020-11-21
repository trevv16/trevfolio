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
const inquiryCon = require('../controllers/inquiryController');

router.get('/users', checkAuth, userCon.getAll);
router.get('/users/:userID', checkAuth, userCon.getById);
router.post('/users', checkAuth, userCon.create);
router.put('/users/:userID', checkAuth, userCon.update);
router.delete('/users/:userID', checkAuth, userCon.remove);

router.get('/projects', checkAuth, projectCon.getAll);
router.get('/projects/:projectID', checkAuth, projectCon.getById);
router.post('/projects', checkAuth, projectCon.create);
router.put('/projects/:projectID', checkAuth, projectCon.update);
router.delete('/projects/:projectID', checkAuth, projectCon.remove);

router.get('/galleries', checkAuth, galleryCon.getAll);
router.get('/galleries/:galleryID', checkAuth, galleryCon.getById);
router.post('/galleries', checkAuth, galleryCon.create);
router.put('/galleries/:galleryID', checkAuth, galleryCon.update);
router.delete('/galleries/:galleryID', checkAuth, galleryCon.remove);

router.get('/skills', checkAuth, skillCon.getAll);
router.get('/skills/:skillID', checkAuth, skillCon.getById);
router.post('/skills', checkAuth, skillCon.create);
router.put('/skills/:skillID', checkAuth, skillCon.update);
router.delete('/skills/:skillID', checkAuth, skillCon.remove);

router.get('/resumes', checkAuth, resumeCon.getAll);
router.get('/resumes/:resumeID', checkAuth, resumeCon.getById);
router.post('/resumes', checkAuth, resumeCon.create);
router.put('/resumes/:resumeID', checkAuth, resumeCon.update);
router.delete('/resumes/:resumeID', checkAuth, resumeCon.remove);

router.get('/blogs', checkAuth, blogCon.getAll);
router.get('/blogs/:blogID', checkAuth, blogCon.getById);
router.post('/blogs', checkAuth, blogCon.create);
router.put('/blogs/:blogID', checkAuth, blogCon.update);
router.delete('/blogs/:blogID', checkAuth, blogCon.remove);

router.get('/posts', checkAuth, postCon.getAll);
router.get('/posts/:postID', checkAuth, postCon.getById);
router.post('/posts', checkAuth, postCon.create);
router.put('/posts/:postID', checkAuth, postCon.update);
router.delete('/posts/:postID', checkAuth, postCon.remove);

router.get('/mailing_lists', checkAuth, mailingListCon.getAll);
router.get('/mailing_lists/:mailingListID', checkAuth, mailingListCon.getById);
router.post('/mailing_lists', checkAuth, mailingListCon.create);
router.put('/mailing_lists/:mailingListID', checkAuth, mailingListCon.update);
router.delete(
  '/mailing_lists/:mailingListID',
  checkAuth,
  mailingListCon.remove
);

router.get('/emails', checkAuth, emailCon.getAll);
router.get('/emails/:emailID', checkAuth, emailCon.getById);
router.post('/emails', checkAuth, emailCon.create);
router.put('/emails/:emailID', checkAuth, emailCon.update);
router.delete('/emails/:emailID', checkAuth, emailCon.remove);

router.get('/inquiries', checkAuth, inquiryCon.getAll);
router.get('/inquiries/:inquiryID', checkAuth, inquiryCon.getById);
router.post('/inquiries', inquiryCon.create);
router.put('/inquiries/:inquiryID', checkAuth, inquiryCon.update);
router.delete('/inquiries/:inquiryID', checkAuth, inquiryCon.remove);

module.exports = router;
