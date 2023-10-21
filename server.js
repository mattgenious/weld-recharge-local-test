require('dotenv').config();

const example = require('./community-connectors/recharge/subscriptions.js');


const express = require('express');
const app = express();
app.use(express.json());
app.post('/', exports.handler);
app.listen(3000, () => console.log('Server is running on port 3000'));
