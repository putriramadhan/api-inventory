const ConfigCTA = require("../config/ConfigCTA");
const DAOItemInvoice= require("../dao/DAOItemInvoice");

const ControllerItemInvoice= require("express").Router();

ControllerItemInvoice.post("/", async (req, res) => {
    try {
        await DAOItemInvoice.create(
            req.body.id_item_inv,
            req.body.id_inv,
            req.body.id_po,
            req.body.kode_brg,
            req.body.nama_brg,
            req.body.harga_brg,
            req.body.qty,
            req.body.total
        );
        return res.status(201).json(ConfigCTA.CTA_MESSAGE_SUCCESS_CREATE);
    } catch (error) {
        console.log(error);
        return res.status(400).json(ConfigCTA.CTA_MESSAGE_REQUEST_ERROR);
    }
});

ControllerItemInvoice.get("/:id_item_inv", async (req, res) =>{
    try {
        const result = await DAOItemInvoice.get(req.params.id_item_inv);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(400).json(ConfigCTA.CTA_MESSAGE_REQUEST_ERROR);
    }
});

ControllerItemInvoice.get("/", async (req, res) => {
    try {
      const results = await DAOItemInvoice.all(req.query.query, req.query.limit);
      return res.status(200).json(results);
    } catch (error) {
      console.log(error);
      return res.status(400).json(ConfigCTA.CTA_MESSAGE_REQUEST_ERROR);
    }
  })

ControllerItemInvoice.put("/:id_item_inv", async (req, res) => {
    try {
        await DAOItemInvoice.update(
            req.params.id_item_inv,
            req.body.id_inv,
            req.body.id_po,
            req.body.kode_brg,
            req.body.nama_brg,
            req.body.harga_brg,
            req.body.qty,
            req.body.total
        );
        return res.status(200).json(ConfigCTA.CTA_MESSAGE_SUCCESS_UPDATE);
    } catch (error) {
        console.log(error);
        return res.status(400).json(ConfigCTA.CTA_MESSAGE_REQUEST_ERROR);
    }
});

ControllerItemInvoice.delete("/:id_item_inv", async(req, res) => {
    try {
        await DAOItemInvoice.delete(req.params.id_item_inv);
        return res.status(200).json(ConfigCTA.CTA_MESSAGE_SUCCESS_DELETE);
    } catch (error) {
        console.log(error);
        return res.status(400).json(ConfigCTA.CTA_MESSAGE_REQUEST_ERROR);
    }
});

module.exports = ControllerItemInvoice;
