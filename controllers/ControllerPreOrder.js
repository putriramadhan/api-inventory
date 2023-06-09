const ConfigCTA = require("../config/ConfigCTA");
const DAOPreOrder= require("../dao/DAOPreOrder");

const ControllerPreOrder= require("express").Router();

ControllerPreOrder.post("/", async (req, res) => {
    try {
        await DAOPreOrder.create(
            req.body.id_po,
            req.body.tanggal,
            req.body.supplier
        );
        return res.status(201).json(ConfigCTA.CTA_MESSAGE_SUCCESS_CREATE);
    } catch (error) {
        console.log(error);
        return res.status(400).json(ConfigCTA.CTA_MESSAGE_REQUEST_ERROR);
    }
});

ControllerPreOrder.get("/:id_po", async (req, res) =>{
    try {
        const result = await DAOPreOrder.get(req.params.id_po);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(400).json(ConfigCTA.CTA_MESSAGE_REQUEST_ERROR);
    }
});

ControllerPreOrder.get("/", async (req, res) =>{
    try {
        const result = await DAOPreOrder.all(req.query.query, req.query.limit);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(400).json(ConfigCTA.CTA_MESSAGE_REQUEST_ERROR);
    }
});

ControllerPreOrder.put("/:id_po", async (req, res) => {
    try {
        await DAOPreOrder.update(
            req.params.id_po,
            req.body.tanggal,
            req.body.supplier,
        );
        return res.status(200).json(ConfigCTA.CTA_MESSAGE_SUCCESS_UPDATE);
    } catch (error) {
        console.log(error);
        return res.status(400).json(ConfigCTA.CTA_MESSAGE_REQUEST_ERROR);
    }
});
//jika dibutuhkan
// ControllerPreOrder.delete("/:id_po", async(req, res) => {
//     try {
//         await DAOPreOrder.delete(req.params.id_po);
//         return res.status(200).json(ConfigCTA.CTA_MESSAGE_SUCCESS_DELETE);
//     } catch (error) {
//         console.log(error);
//         return res.status(400).json(ConfigCTA.CTA_MESSAGE_REQUEST_ERROR);
//     }
// });

module.exports = ControllerPreOrder;
