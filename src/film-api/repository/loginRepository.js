const database = require("../../config/database/database");
const Entity = require("../model/userModel");

exports.readByEmail = async (email) => {
    await database.sync();
    var entity = await Entity.findOne({
      email: email
    })
    return entity;
  };