const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true }, // Pseudo unique
    password: { type: String, required: true }, // Mot de passe (sera crypté)
    role: { type: String, default: 'police' } // Par défaut, c'est un policier
});

module.exports = mongoose.model('User', UserSchema);