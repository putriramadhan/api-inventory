const ConfigCTA = require("../config/ConfigCTA");
const DAOItempo= require("../dao/DAOItempo");

const ControllerItempo= require("express").Router();

ControllerItempo.post("/", async (req, res) => {
    try {
        await DAOItempo.create(
            req.body.id_item_po,
            req.body.id_po,
            req.body.kode_brg,
            req.body.nama_brg,
            req.body.harga_brg,
            req.body.qty
        );
        return res.status(201).json(ConfigCTA.CTA_MESSAGE_SUCCESS_CREATE);
    } catch (error) {
        console.log(error);
        return res.status(400).json(ConfigCTA.CTA_MESSAGE_REQUEST_ERROR);
    }
});

ControllerItempo.get("/:id_item_po", async (req, res) =>{
    try {
        const result = await DAOItempo.get(req.params.id_po);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(400).json(ConfigCTA.CTA_MESSAGE_REQUEST_ERROR);
    }
});

ControllerItempo.get("/", async (req, res) =>{
    try {
        const result = await DAOItempo.all(req.query.query, req.query.limit);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(400).json(ConfigCTA.CTA_MESSAGE_REQUEST_ERROR);
    }
});

// jika dibutuhkan
// ControllerItempo.put("/:id_item_po", async (req, res) => {
//     try {
//         await DAOItempo.update(
//             req.params.id_item_po,
//             req.body.id_po,
//             req.body.kode_brg,
//             req.body.nama_brg,
//             req.body.harga_brg,
//             req.body.qty
//         );
//         return res.status(200).json(ConfigCTA.CTA_MESSAGE_SUCCESS_UPDATE);
//     } catch (error) {
//         console.log(error);
//         return res.status(400).json(ConfigCTA.CTA_MESSAGE_REQUEST_ERROR);
//     }
// });

// ControllerItempo.delete("/:id_po", async(req, res) => {
//     try {
//         await DAOItempo.delete(req.params.id_po);
//         return res.status(200).json(ConfigCTA.CTA_MESSAGE_SUCCESS_DELETE);
//     } catch (error) {
//         console.log(error);
//         return res.status(400).json(ConfigCTA.CTA_MESSAGE_REQUEST_ERROR);
//     }
// });

module.exports = ControllerItempo;
