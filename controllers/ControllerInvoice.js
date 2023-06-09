const ConfigCTA = require("../config/ConfigCTA");
const DAOInvoice= require("../dao/DAOInvoice");

const ControllerInvoice= require("express").Router();

ControllerInvoice.post("/", async (req, res) => {
    try {
        await DAOInvoice.create(
            req.body.id_inv,
            req.body.id_po,
            req.body.tanggal,
            req.body.total
        );
        return res.status(201).json(ConfigCTA.CTA_MESSAGE_SUCCESS_CREATE);
    } catch (error) {
        console.log(error);
        return res.status(400).json(ConfigCTA.CTA_MESSAGE_REQUEST_ERROR);
    }
});

ControllerInvoice.get("/:id_inv", async (req, res) =>{
    try {
        const result = await DAOInvoice.get(req.params.id_inv);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(400).json(ConfigCTA.CTA_MESSAGE_REQUEST_ERROR);
    }
});

ControllerInvoice.get("/", async (req, res) => {
    try {
      const results = await DAOInvoice.all(req.query.query, req.query.limit);
      return res.status(200).json(results);
    } catch (error) {
      console.log(error);
      return res.status(400).json(ConfigCTA.CTA_MESSAGE_REQUEST_ERROR);
    }
  });

ControllerInvoice.put("/:id_inv", async (req, res) => {
    try {
        await DAOInvoice.update(
            req.params.id_inv,
            req.body.id_po,
            req.body.tanggal,
            req.body.total
        );
        return res.status(200).json(ConfigCTA.CTA_MESSAGE_SUCCESS_UPDATE);
    } catch (error) {
        console.log(error);
        return res.status(400).json(ConfigCTA.CTA_MESSAGE_REQUEST_ERROR);
    }
});

ControllerInvoice.delete("/:id_inv", async(req, res) => {
    try {
        await DAOInvoice.delete(req.params.id_inv);
        return res.status(200).json(ConfigCTA.CTA_MESSAGE_SUCCESS_DELETE);
    } catch (error) {
        console.log(error);
        return res.status(400).json(ConfigCTA.CTA_MESSAGE_REQUEST_ERROR);
    }
});

module.exports = ControllerInvoice;
