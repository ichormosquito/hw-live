import express from 'express';
import { register, login, resetPassword, returnAllUsers, getUserInfo, getUsernameFromID} from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/reset-password', resetPassword);
// router.get('/getAllUsers', returnAllUsers);
router.get('/info/:token', getUserInfo)
router.get('/username/:id', getUsernameFromID)

export default router;
