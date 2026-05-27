const express = require('express');
const siteController = require('../controllers/siteController');

const router = express.Router();

router.get('/', siteController.home);
router.get('/services', siteController.services);
router.get('/consultations', siteController.consultations);
router.get('/tarifs', (req, res) => res.redirect(301, '/contact'));
router.get('/apropos', siteController.about);
router.get('/blog', siteController.blog);
router.get('/politique-de-confidentialite', siteController.privacy);
router.get('/contact', siteController.contact);
router.get('/reservation', siteController.booking);
router.post('/contact', siteController.sendContact);

module.exports = router;
