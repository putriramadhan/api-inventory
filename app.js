const express = require("express");
const dotenv = require("dotenv");
const ControllerUser = require("./controllers/ControllerUser");
const ControllerBarang = require("./controllers/ControllerBarang");
const ControllerPreOrder = require("./controllers/ControllerPreOrder");
const ControllerInvoice = require("./controllers/ControllerInvoice");
const ControllerItempo = require("./controllers/ControllerItempo");
const ControllerItemInvoice = require("./controllers/ControllerItemInvoice");

dotenv.config();

const app = express();
app.use(express.json());

app.use("/user", ControllerUser);
app.use("/barang", ControllerBarang);
app.use("/preorder", ControllerPreOrder);
app.use("/invoice", ControllerInvoice);
app.use("/itempo", ControllerItempo);
app.use("/iteminvoice", ControllerItemInvoice);

module.exports = app;
