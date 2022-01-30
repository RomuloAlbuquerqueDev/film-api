const service = require('../service/loginService');
const token = require('../../config/security/tokenGenerate');

const tokenGenerate = token.tokenGenerate();

const controller = {};

controller.login = async (req, res) => {
	const loginEmail = req.body.email;
	const loginPassword = req.body.password;
	
	console.log(loginEmail);
	console.log(loginPassword);

	let result = await service.login(loginEmail, loginPassword);
	console.log("aqui resultado do service.login:   "+result);
	if (result === true) {
		res.setHeader("Content-Type", "application/json");
		res.send({
			token: tokenGenerate
		});
	} else {
		res.sendStatus(401);
	}
};

module.exports = controller;