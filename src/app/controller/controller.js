const User = require('../models/user');

// Register a new user
exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    
    try {
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
};
