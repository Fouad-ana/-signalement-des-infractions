const mongoose = require('mongoose');

const CrimeSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    lieu: {
        type: String,
        required: true,
    },
    // --- C'EST ICI QUE C'ETAIT MANQUANT ---
    lat: { type: Number }, // Latitude
    lng: { type: Number }, // Longitude
    // --------------------------------------
    date: {
        type: Date,
        default: Date.now,
    },
    statut: {
        type: String,
        enum: ['soumis', 'en_cours', 'resolu'],
        default: 'soumis',
    }
});

module.exports = mongoose.model('Crime', CrimeSchema);