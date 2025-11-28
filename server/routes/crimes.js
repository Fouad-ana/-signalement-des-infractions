const express = require('express');
const router = express.Router();
const Crime = require('../models/Crime'); // On importe le modèle qu'on vient de créer

// 1. Route pour AJOUTER un signalement (POST)
// L'adresse sera : http://localhost:5000/api/crimes
router.post('/', async (req, res) => {
    try {
        // On crée un nouveau crime avec les données reçues (req.body)
        const nouveauCrime = new Crime(req.body);
        
        // On le sauvegarde dans la base de données
        const crimeSauvegarde = await nouveauCrime.save();
        
        // On répond "C'est bon !" avec le crime créé
        res.status(201).json(crimeSauvegarde);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 2. Route pour LIRE tous les signalements (GET)
router.get('/', async (req, res) => {
    try {
        // On cherche tout dans la base de données
        const crimes = await Crime.find();
        res.json(crimes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
// 3. Route pour MODIFIER le statut d'un signalement (PUT)
// L'adresse sera : http://localhost:5000/api/crimes/:id
router.put('/:id', async (req, res) => {
    try {
        // On cherche le crime par son ID et on met à jour son statut
        const crimeMisAJour = await Crime.findByIdAndUpdate(
            req.params.id, 
            { statut: req.body.statut }, 
            { new: true } // Pour renvoyer le crime modifié
        );
        res.json(crimeMisAJour);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
module.exports = router;