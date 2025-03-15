import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    id: { type: String, ref: 'User', required: true },
    username: { type: String, required: true},
    content: { type: String, required: true },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

export default mongoose.model('Post', PostSchema);
