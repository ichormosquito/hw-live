import Post from '../models/Post.js';

export const getPosts = async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
};

export const createPost = async (req, res) => {
    const { id, content, username } = req.body
    console.log(id)
    console.log(content)
    console.log(username)
    const post = await Post.create({ id: id, username: username, content: content });
    res.json({ message: 'Post created', post });
};

export const likePost = async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (post) {
        post.likes += 1;
        await post.save();
        res.json({ message: 'Post liked', post });
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
};

export const unlikePost = async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (post && post.likes > 0) {
        post.likes -= 1;
        await post.save();
        res.json({ message: 'Post unliked', post });
    } else {
        res.status(404).json({ message: 'Post not found or no likes to remove' });
    }
};