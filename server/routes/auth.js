const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const SECRET_KEY = "mon_secret_super_securise";


router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;

        
        const hashedPassword = await bcrypt.hash(password, 10);

        
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "Utilisateur créé !" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 2. CONNEXION (Login)
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

       
        const user = await User.findOne({ username });
        if (!user) return res.status(404).json({ error: "Utilisateur inconnu" });

        
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return res.status(401).json({ error: "Mauvais mot de passe" });

       
        const token = jwt.sign({ id: user._id, role: user.role }, SECRET_KEY, { expiresIn: '1h' });

        res.json({ token, username: user.username });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;