let friends = ['Friend 1', 'Friend 2', 'Friend 3'];

export const getFriends = (req, res) => {
    res.json(friends);
};

export const addFriend = (req, res) => {
    const { friend } = req.body;
    if (!friends.includes(friend)) {
        friends.push(friend);
        res.json({ message: 'Friend added', friends });
    } else {
        res.status(400).json({ message: 'Friend already exists' });
    }
};

export const removeFriend = (req, res) => {
    const { friend } = req.body;
    friends = friends.filter(f => f !== friend);
    res.json({ message: 'Friend removed', friends });
};
