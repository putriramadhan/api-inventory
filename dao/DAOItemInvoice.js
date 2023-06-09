const ConfigDatabase = require("../config/ConfigDatabase");

const DAOItemInvoice = {};

DAOItemInvoice.all = async (query, limit = 30) => {
    let results = ConfigDatabase.queryBuilder("item_invoice")
      .limit(limit);
  
    if (query) {
      results = results
        .whereILike("id_item_inv", `%${query}%`)
        .whereILike("id_inv", `%${query}%`)
        .whereILike("id_po", `%${query}%`)
        .orWhereILike("kode_brg", `%${query}%`)
        .orWhereILike("nama_brg", `%${query}%`)
    }

    return await results;
  };


DAOItemInvoice.create = async (
    id_item_inv,
    id_inv,
    id_po,
    kode_brg,
    nama_brg,
    harga_brg,
    qty,
    subtotal,
) => {
    const payload = {
        id_item_inv,
        id_inv,
        id_po,
        kode_brg,
        nama_brg,
        harga_brg,
        qty,
        subtotal,
    };

    await ConfigDatabase.queryBuilder("item_invoice").insert(payload);
    return payload;
};

DAOItemInvoice.get = async () => {
    const result = ConfigDatabase.queryBuilder("item_invoice")
    .first();
    return result;
};

DAOItemInvoice.update = async (
    id_item_inv,
    id_inv,
    id_po,
    kode_brg,
    nama_brg,
    harga_brg,
    qty,
    subtotal,
) => {
    const payload = {
        id_item_inv,
        id_inv,
        id_po,
        kode_brg,
        nama_brg,
        harga_brg,
        qty,
        subtotal,
    };

    await ConfigDatabase.queryBuilder("item_invoice")
    .where({ id_item_inv, })
    .update(payload);

    return payload;
};

module.exports = DAOItemInvoice;