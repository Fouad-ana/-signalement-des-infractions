#  Application de Signalement d'Infractions

Une application Full Stack complète permettant aux citoyens de signaler des infractions géolocalisées et aux forces de l'ordre de gérer les dossiers via un tableau de bord sécurisé.

---

## Technologies Utilisées

- **Frontend :** Next.js 14 (App Router), TypeScript, Tailwind CSS, Google Maps API.
- **Backend :** Node.js, Express.js.
- **Base de Données :** MongoDB Atlas (Cloud).
- **Sécurité :** JWT (Authentification) & Bcrypt (Hachage des mots de passe).

---

##  Installation et Lancement

Ce projet nécessite deux terminaux ouverts simultanément (un pour le serveur, un pour le site).

### 1. Démarrer le Serveur (Backend)
Dans le premier terminal :
```bash
cd server
npm install
node index.js
COMMANDES POUR LANCER LE PROJET :
---------------------------------
Terminal 1 (Serveur) :
cd server
node index.js

Terminal 2 (Site) :
cd client
npm run dev

ACCES ADMIN (POLICE) :
----------------------
Lien : http://localhost:3000/admin
Identifiant : Commissaire
Mot de passe : 123456
