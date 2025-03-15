import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

export const register = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const id = Math.floor(1000000 + Math.random() * 9000000);
        const user = await User.create({ username, email, hashedPassword, id });
        const token = generateToken(user._id);
        const addToken = await User.updateOne({ email } , { token: token })
        res.status(201).json({ token: token });
    } catch (error) {
        res.status(400).json({ message: 'Registration failed' });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (user && (await user.matchPassword(password))) {
            const token = generateToken(user._id);
            const username = await User.updateOne({ email } , { token: token })
            res.status(200).json({ token: token });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Login failed', error: error });
    }
};


export const resetPassword = async (req, res) => {
    const { email, oldPassword, newPassword } = req.body;

    if (!email || !oldPassword || !newPassword) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        
        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Old password is incorrect' });
        }

        user.password = await bcrypt.hash(newPassword, 10);
        await user.save();

        res.json({ message: 'Password reset successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Password reset failed' });
    }
};

export const getUserInfo = async (req, res) => {
    const { token } = req.params;
    try {
        const user = await User.findOne({ token });
        if (user) return res.status(200).json({ message: 'User is logged in.', user: user.username, id: user.id })
    } catch(error) {
        res.status(500).json({ message: 'Invalid token.' })
    }
}

export const getUsernameFromID = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findOne({ id });
        if (user) return res.status(200).json({ message: 'ID has been found.', user: user.username })
    } catch(error) {
        res.status(500).json({ message: 'Invalid token.' })
    }
}

export const returnAllUsers = async (req, res) => {
    const users = await User.find({});
    if (!users) return res.status(404).json({ message: 'No users registered' })
    res.json({ message: 'Users found', users });
}