import User from '../models/User.js';

export const searchUsers = async (req, res) => {
    const { query } = req.query;
    const users = await User.find({ username: new RegExp(query, 'i') });
    res.json(users);
};
