const router = require('express').Router();
const PostController = require('../controllers/post');


router.get('/',PostController.getPosts);

module.exports = router;