const router = require('express').Router();
const PostController = require('../controllers/post');


router.get('/',PostController.getPosts);
router.post('/',PostController.addPost);
router.delete('/:id',PostController.deletePost);
router.put('/:id',PostController.putPost);

module.exports = router;