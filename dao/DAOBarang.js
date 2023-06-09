const ConfigDatabase = require("../config/ConfigDatabase");

const DAOBarang = {};

DAOBarang.all = async (query, limit = 30) => {
    let results = ConfigDatabase.queryBuilder("barang")
      .limit(limit);
  
    if (query) {
      results = results
        .whereILike("kode_brg", `%${query}%`)
        .orWhereILike("nama_brg", `%${query}%`)
        .orWhereILike("harga_brg", `%${query}%`)
        .orWhereILike("stok", `%${query}%`)
    }

    return await results;
  };

DAOBarang.create = async (
    kode_brg,
    nama_brg,
    harga_brg,
    stok
) => {
    const payload = {
        kode_brg,
        nama_brg,
        harga_brg,
        stok
    };

    await ConfigDatabase.queryBuilder("barang").insert(payload);
    return payload;
};


DAOBarang.get = async (kode_brg) => {
    const result = ConfigDatabase.queryBuilder("barang")
    .where(kode_brg)
    .first();
    return result;
};

DAOBarang.update = async (
    kode_brg,
    nama_brg,
    harga_brg,
    stok
) => {
    const payload = {
        kode_brg,
        nama_brg,
        harga_brg,
        stok
    };

    await ConfigDatabase.queryBuilder("barang")
    .where({ kode_brg })
    .update(payload);

    return payload;
};

DAOBarang.delete = async (kode_brg)=> {
    await ConfigDatabase.queryBuilder("barang").where({ kode_brg }).del();
    return null;
};
module.exports = DAOBarang;