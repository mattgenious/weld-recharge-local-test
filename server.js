require("dotenv").config();

const express = require("express");
const app = express();
const charges = require("./community-connectors/recharge/charges.js");
const collections = require("./community-connectors/recharge/collections.js");
const customers = require("./community-connectors/recharge/customers.js");
const discounts = require("./community-connectors/recharge/discounts.js");
const metafields = require("./community-connectors/recharge/metafields.js");
const onetimes = require("./community-connectors/recharge/onetimes.js");
const orders = require("./community-connectors/recharge/orders.js");
const payment_methods = require("./community-connectors/recharge/payment_methods.js");
const plans = require("./community-connectors/recharge/plans.js");
const products = require("./community-connectors/recharge/products.js");
const retention_strategies = require("./community-connectors/recharge/retention_strategies.js");
const subscriptions = require("./community-connectors/recharge/subscriptions.js");

app.use(express.json());

app.get(["charges/", "charges/schema"], async (req, res) => {
  try {
    await charges.handler(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
app.get(["collections/", "collections/schema"], async (req, res) => {
  try {
    await collections.handler(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
app.get(["customers/", "customers/schema"], async (req, res) => {
  try {
    await customers.handler(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
app.get(["discounts/", "discounts/schema"], async (req, res) => {
  try {
    await discounts.handler(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
app.get(["metafields/", "metafields/schema"], async (req, res) => {
  try {
    await metafields.handler(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
app.get(["onetimes/", "onetimes/schema"], async (req, res) => {
  try {
    await onetimes.handler(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
app.get(["orders/", "orders/schema"], async (req, res) => {
  try {
    await orders.handler(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
app.get(["payment_methods/", "payment_methods/schema"], async (req, res) => {
  try {
    await payment_methods.handler(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
app.get(["plans/", "plans/schema"], async (req, res) => {
  try {
    await plans.handler(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
app.get(["products/", "products/schema"], async (req, res) => {
  try {
    await products.handler(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
app.get(
  ["retention_strategies/", "retention_strategies/schema"],
  async (req, res) => {
    try {
      await retention_strategies.handler(req, res);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
);
app.get(["subscriptions/", "subscriptions/schema"], async (req, res) => {
  try {
    await subscriptions.handler(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(3000, () => console.log("Server is running on port 3000"));
