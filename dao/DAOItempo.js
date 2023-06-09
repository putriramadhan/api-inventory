const ConfigDatabase = require("../config/ConfigDatabase");

const DAOItempo = {};

DAOItempo.all = async (query, limit = 30) => {
    let results = ConfigDatabase.queryBuilder("item_po")
      .limit(limit);
  
    if (query) {
      results = results
        .whereILike("id_item_po", `%${query}%`)
        .whereILike("id_po", `%${query}%`)
        .whereILike("kode_brg", `%${query}%`)
        .orWhereILike("nama_brg", `%${query}%`)
    }

    return await results;
  };

DAOItempo.create = async (
    id_item_po,
    id_po,
    kode_brg,
    nama_brg,
    harga_brg,
    qty
) => {
    const payload = {
        id_item_po,
        id_po,
        kode_brg,
        nama_brg,
        harga_brg,
        qty
    };

    await ConfigDatabase.queryBuilder("item_po").insert(payload);
    return payload;
};

DAOItempo.get = async () => {
    const result = ConfigDatabase.queryBuilder("item_po")
    .first();
    return result;
};

DAOItempo.update = async (
    id_item_po,
    id_po,
    kode_brg,
    nama_brg,
    harga_brg,
    qty
) => {
    const payload = {
        id_item_po,
        id_po,
        kode_brg,
        nama_brg,
        harga_brg,
        qty
    };

    await ConfigDatabase.queryBuilder("item_po")
    .where({ id_item_po, })
    .update(payload);

    return payload;
};

DAOItempo.delete = async (id_item_po)=> {
    await ConfigDatabase.queryBuilder("item_po").where({ id_item_po }).del();
    return null;
};

module.exports = DAOItempo;