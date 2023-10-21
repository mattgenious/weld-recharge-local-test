require('dotenv').config();

const express = require('express');
const app = express();
const subscriptions = require('./community-connectors/recharge/subscriptions.js');

app.use(express.json());

app.get(['/', '/schema'], async (req, res) => {
  try {
    await subscriptions.handler(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, () => console.log('Server is running on port 3000'));
