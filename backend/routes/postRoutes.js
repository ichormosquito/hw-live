import express from 'express';
import { getPosts, likePost, unlikePost } from '../controllers/postController.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/:id/like', likePost);
router.post('/:id/unlike', unlikePost);

export default router;
