const database = require("../../config/database/database");
const Entity = require("../model/userModel");

exports.create = async (create) => {
  await database.sync();
  let entity = await Entity.create({
    name: create.name,
    email: create.email,
    password: create.password
  });
  return entity;
};

exports.read = async () => {
  await database.sync();
  let list = await Entity.findAll();
  return list;
};

exports.readById = async (id) => {
  await database.sync();
  let entity = await Entity.findByPk(id);
  return entity;
};

exports.update = async (id, update) => {
  await database.sync();
  let entity = await Entity.findByPk(id);
  entity.name = update.name;
  entity.email = update.email;
  entity.password = update.password;
  entity.save();
  return entity;
};

exports.del = async (id) => {
  await database.sync();
  let entity = await Entity.findByPk(id);
  entity.destroy();
  return null;
}

exports.readByEmail = (email) => {
  database.sync();
  var entity = Entity.findOne({
    email: email
  })
  return entity;
};

