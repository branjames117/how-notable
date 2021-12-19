const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 5000;

const app = express();

// server middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// set routes
app.use('/', htmlRoutes);
app.use('/', apiRoutes);

// start server listening
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}.`);
});
