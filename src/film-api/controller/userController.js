const service = require('../service/userService');

const controller = {};

controller.create = async (req, res) => {
	let entity = req.body;
	entity = await service.create(entity);
	res.json(entity);
};

controller.read = async (req, res) => {
	let entity = await service.read();
	res.json(entity);
};

controller.readById = async (req, res) => {
	let entity = await service.readById(req.params.id);
	res.json(entity);
};

controller.update = async (req, res) => {
	let entity = req.body;
	await service.update(req.params.id, entity);
	res.json(entity);
};

controller.del = async (req, res) => {
	await service.del(req.params.id);
	res.end();
};

controller.readByEmail = (req, res) => {
	let entity = service.readByEmail(req.params.email);
	res.json(entity);
};

module.exports = controller;