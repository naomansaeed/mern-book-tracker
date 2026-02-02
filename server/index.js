const express = require('express');
const cors = require('cors');
const readings = require('./data');

const app = express();
const PORT = 5000;

app.use(cors()); // Allows React (port 5173) to fetch from this server

app.get('/api/books', (req, res) => {
  res.json(readings);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});