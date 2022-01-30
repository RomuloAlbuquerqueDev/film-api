const express = require('express');
const router = express.Router();

const service = require('../service/filmService');

const controller = {};

const secretKey = "1010";
const jwtMiddleware = require("express-jwt")({
	secret: secretKey
});

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

module.exports = controller;