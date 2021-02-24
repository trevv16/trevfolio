const express = require('express');

const router = express.Router();

// Middlewares
const { protect } = require('../middlewares/auth');

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
const subscriberCon = require('../controllers/subscriberController');

router.get('/users', protect, userCon.getAll);
router.get('/users/:userID', protect, userCon.getById);
router.post('/users', protect, userCon.create);
router.put('/users/:userID', protect, userCon.update);
router.delete('/users/:userID', protect, userCon.remove);

router.get('/projects', projectCon.getAll);
router.post('/projects/search', projectCon.get);
router.get('/projects/:projectID', protect, projectCon.getById);
router.post('/projects', protect, projectCon.create);
router.put('/projects/:projectID', protect, projectCon.update);
router.delete('/projects/:projectID', protect, projectCon.remove);

router.get('/galleries', protect, galleryCon.getAll);
router.get('/galleries/search', projectCon.get);
router.get('/galleries/:galleryID', protect, galleryCon.getById);
router.post('/galleries', protect, galleryCon.create);
router.put('/galleries/:galleryID', protect, galleryCon.update);
router.delete('/galleries/:galleryID', protect, galleryCon.remove);

router.get('/skills', skillCon.getAll);
router.get('/skills/search', projectCon.get);
router.get('/skills/:skillID', protect, skillCon.getById);
router.post('/skills', protect, skillCon.create);
router.put('/skills/:skillID', protect, skillCon.update);
router.delete('/skills/:skillID', protect, skillCon.remove);

router.get('/resumes', protect, resumeCon.getAll);
router.get('/resumes/:resumeID', protect, resumeCon.getById);
router.post('/resumes', protect, resumeCon.create);
router.put('/resumes/:resumeID', protect, resumeCon.update);
router.delete('/resumes/:resumeID', protect, resumeCon.remove);

router.get('/blogs', protect, blogCon.getAll);
router.get('/blogs/:blogID', protect, blogCon.getById);
router.get('/blogs/:blogID/posts', protect, blogCon.getBlogPosts);
router.post('/blogs', protect, blogCon.create);
router.put('/blogs/:blogID', protect, blogCon.update);
router.delete('/blogs/:blogID', protect, blogCon.remove);

router.get('/posts', protect, postCon.getAll);
router.get('/posts/:postID', protect, postCon.getById);
router.post('/posts', protect, postCon.create);
router.put('/posts/:postID', protect, postCon.update);
router.delete('/posts/:postID', protect, postCon.remove);

router.get('/mailing_lists', protect, mailingListCon.getAll);
router.get('/mailing_lists/:mailingListID', protect, mailingListCon.getById);
router.post('/mailing_lists', protect, mailingListCon.create);
router.put('/mailing_lists/:mailingListID', protect, mailingListCon.update);
router.delete('/mailing_lists/:mailingListID', protect, mailingListCon.remove);

router.get('/emails', protect, emailCon.getAll);
router.get('/emails/search', projectCon.get);
router.get('/emails/:emailID', protect, emailCon.getById);
router.post('/emails', protect, emailCon.create);
router.put('/emails/:emailID', protect, emailCon.update);
router.delete('/emails/:emailID', protect, emailCon.remove);

router.get('/inquiries', protect, inquiryCon.getAll);
router.get('/inquiries/:inquiryID', protect, inquiryCon.getById);
router.post('/inquiries', inquiryCon.create);
router.put('/inquiries/:inquiryID', protect, inquiryCon.update);
router.delete('/inquiries/:inquiryID', protect, inquiryCon.remove);

router.get('/subscribers', protect, subscriberCon.getAll);
router.get('/emails/search', projectCon.get);
router.get('/subscribers/:subscriberID', protect, subscriberCon.getById);
router.post('/subscribers', subscriberCon.create);
router.put('/subscribers/:subscriberID', protect, subscriberCon.update);
router.delete('/subscribers/:subscriberID', protect, subscriberCon.remove);

module.exports = router;
