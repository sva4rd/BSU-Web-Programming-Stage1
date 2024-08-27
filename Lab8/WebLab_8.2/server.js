const express = require('express');
const path = require('path');
const app = express();
const port = 2596;

app.use(express.static(`${__dirname}`));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get('/data', (req, res) => {
  res.download(`${__dirname}/data/data.json`);
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
