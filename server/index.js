const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const crimeRoutes = require('./routes/crimes');
const authRoutes = require('./routes/auth'); // <--- LIGNE IMPORTANTE 1

const app = express();

app.use(cors({
    origin: 'http://localhost:3000' // On autorise explicitement le site
}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connecté à la base de données !"))
  .catch((err) => console.error("❌ Erreur :", err));

app.use('/api/crimes', crimeRoutes);
app.use('/api/auth', authRoutes); // <--- LIGNE IMPORTANTE 2 (Le branchement)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});