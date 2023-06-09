const ConfigCTA = require("../config/ConfigCTA");
const DAOBarang = require("../dao/DAOBarang");

const ControllerBarang = require("express").Router();

ControllerBarang.post("/", async (req, res) => {
    try {
        await DAOBarang.create(
            req.body.kode_brg,
            req.body.nama_brg,
            req.body.harga_brg,
            req.body.stok
        );
        return res.status(201).json(ConfigCTA.CTA_MESSAGE_SUCCESS_CREATE);
    } catch (error) {
        console.log(error);
        return res.status(400).json(ConfigCTA.CTA_MESSAGE_REQUEST_ERROR);
    }
});

ControllerBarang.get("/:kode_brg", async (req, res) => {
    try {
        const result = await DAOBarang.get(req.params.kode_brg);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(400).json(ConfigCTA.CTA_MESSAGE_REQUEST_ERROR);
    }
});

ControllerBarang.get("/", async (req, res) => {
    try {
      const results = await DAOBarang.all(req.query.query, req.query.limit);
      return res.status(200).json(results);
    } catch (error) {
      console.log(error);
      return res.status(400).json(ConfigCTA.CTA_MESSAGE_REQUEST_ERROR);
    }
  });

ControllerBarang.put("/:kode_brg", async (req, res) => {
    try {
        await DAOBarang.update(
            req.params.kode_brg,
            req.body.nama_brg,
            req.body.harga_brg,
            req.body.stok
        );
        return res.status(200).json(ConfigCTA.CTA_MESSAGE_SUCCESS_UPDATE);
    } catch (error) {
        console.log(error);
        return res.status(400).json(ConfigCTA.CTA_MESSAGE_REQUEST_ERROR);
    }
});


ControllerBarang.delete("/:kode_brg", async(req, res) => {
    try {
        await DAOBarang.delete(req.params.kode_brg);
        return res.status(200).json(ConfigCTA.CTA_MESSAGE_SUCCESS_DELETE);
    } catch (error) {
        console.log(error);
        return res.status(400).json(ConfigCTA.CTA_MESSAGE_REQUEST_ERROR);
    }
});

module.exports = ControllerBarang;
