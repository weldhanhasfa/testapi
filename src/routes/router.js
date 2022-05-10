const express = require('express');
const Controller = require('../controllers/controller');

const router = express.Router();

router.get('/', Controller.helloWorld);
router.get('/user', Controller.pagesUser);
router.get('/about', Controller.pagesAbout);
router.get('/contac', Controller.pagesContac);
router.get('/404', Controller.pages404);

module.exports = router;
