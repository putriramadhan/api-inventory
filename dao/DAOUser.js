var bcrypt = require("bcryptjs");
const ConfigDatabase = require("../config/ConfigDatabase");

const DAOUser = {};

DAOUser.create = async (email, password, is_superuser, is_staff, status) => {
  const passwordHash = await bcrypt.hash(password, 10);
  await ConfigDatabase.queryBuilder("user").insert({
    email,
    password: passwordHash,
    is_superuser,
    is_staff,
    status,
  });

  return {
    email,
    password,
    is_superuser,
    is_staff,
    status,
  };
};

DAOUser.get = async (email) => {
  const result = (
    await ConfigDatabase.queryBuilder("user").where({ email })
  )[0];

  return result;
};
DAOUser.getByEmail = async (email) => {
  const result = (
    await ConfigDatabase.queryBuilder("user").where({ email })
  )[0];

  return result;
};

DAOUser.all = async (query, limit = 30) => {
  const result = await ConfigDatabase.queryBuilder("user")
    .select("email")
    .select("is_superuser")
    .select("is_staff")
    .select("status")
    .limit(limit);

  return result;
};

DAOUser.update = async (email, is_superuser, is_staff) => {
  await ConfigDatabase.queryBuilder("user").where({ email }).update({
    is_superuser,
    is_staff,
    status,
  });

  const result = await DAOUser.get(email);
  const { password, ...user } = result;

  return user;
};

module.exports = DAOUser;
