const database = require("../../config/database/database");
const Entity = require("../model/filmModel");

exports.create = async (create) => {
  await database.sync();
  let entity = await Entity.create({
    title: create.title,
    director: create.director,
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
  entity.title = update.title;
  entity.director = update.director;
  entity.save();
  return entity;
};

exports.del = async (id) => {
  await database.sync();
  let entity = await Entity.findByPk(id);
  entity.destroy();
  return null;
} 