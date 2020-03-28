const { Router } = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = Router();

// Login and Logout routes:
routes.post('/session', SessionController.store);

// ONG routes:
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

// Incident routes:
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.store);
routes.delete('/incidents/:id', IncidentController.destroy);

routes.get('/incidents/profile', ProfileController.index);

module.exports = routes;