const express = require('express');
const path = require('path');

const siteController = require('./controllers/siteController');
const siteRoutes = require('./routes/siteRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', siteRoutes);

app.use(siteController.notFound);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Monelle est lancé sur http://localhost:${PORT}`);
  });
}

module.exports = app;
