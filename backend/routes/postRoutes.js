import express from 'express';
import { getPosts, likePost, unlikePost, createPost } from '../controllers/postController.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/:id/like', likePost);
router.post('/:id/unlike', unlikePost);
router.post('/create', createPost)

export default router;
