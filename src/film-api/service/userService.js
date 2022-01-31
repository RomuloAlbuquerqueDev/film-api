const repository = require('../repository/userRepository');

exports.create = function (create) {
	return repository.create(create);
};

exports.read = function () {
	const result = repository.read();
	console.log(result)
	return result;
};

exports.readById = function (id) {
	return repository.readById(id);
};

exports.update = function (id, update) {
	return repository.update(id, update);
};

exports.del = function (id) {
	return repository.del(id);
};

exports.readByEmail = function (email) {
	return repository.readByEmail(email);
};