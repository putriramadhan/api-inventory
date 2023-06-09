const ConfigDatabase = require("../config/ConfigDatabase");

const DAOPreOrder = {};

DAOPreOrder.all = async (query, limit = 30) => {
    let results = ConfigDatabase.queryBuilder("po")
      .limit(limit);
  
    if (query) {
      results = results
        .whereILike("id_po", `%${query}%`)
        .orWhereILike("tanggal", `%${query}%`)
        .orWhereILike("supplier", `%${query}%`)
    }

    return await results;
  };


DAOPreOrder.create = async (
    id_po,
    tanggal,
    supplier,
) => {
    const payload = {
        id_po,
        tanggal,
        supplier
    };

    await ConfigDatabase.queryBuilder("po").insert(payload);
    return payload;
};

DAOPreOrder.get = async () => {
    const result = ConfigDatabase.queryBuilder("po")
    .first();
    return result;
};

DAOPreOrder.update = async (
    id_po,
    tanggal,
    supplier
) => {
    const payload = {
        id_po,
        tanggal,
        supplier
    };

    await ConfigDatabase.queryBuilder("po")
    .where({ id_po })
    .update(payload);

    return payload;
};

//jika dibutuhkan
// DAOPreOrder.delete = async (id_po)=> {
//     await ConfigDatabase.queryBuilder("po").where({ id_po }).del();
//     return null;
// };

module.exports = DAOPreOrder;