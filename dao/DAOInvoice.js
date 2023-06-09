const ConfigDatabase = require("../config/ConfigDatabase");

const DAOInvoice = {};

DAOInvoice.all = async (query, limit = 30) => {
    let results = ConfigDatabase.queryBuilder("invoice")
      .limit(limit);
  
    if (query) {
      results = results
        .whereILike("id_inv", `%${query}%`)
        .whereILike("id_po", `%${query}%`)
        .orWhereILike("tanggal", `%${query}%`)
    }

    return await results;
  };


DAOInvoice.create = async (
    id_inv,
    id_po,
    tanggal,
    total,
) => {
    const payload = {
        id_inv,
        id_po,
        tanggal,
        total
    };

    await ConfigDatabase.queryBuilder("invoice").insert(payload);
    return payload;
};

DAOInvoice.get = async () => {
    const result = ConfigDatabase.queryBuilder("invoice")
    .first();
    return result;
};

DAOInvoice.update = async (
    id_inv,
    id_po,
    tanggal,
    total
) => {
    const payload = {
        id_inv,
        id_po,
        tanggal,
        total
    };

    await ConfigDatabase.queryBuilder("invoice")
    .where({ id_inv, })
    .update(payload);

    return payload;
};

module.exports = DAOInvoice;