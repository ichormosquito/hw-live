import express from 'express';
import { getFriends, addFriend, removeFriend } from '../controllers/friendController.js';

const router = express.Router();

router.get('/', getFriends);
router.post('/add', addFriend);
router.post('/remove', removeFriend);

export default router;
