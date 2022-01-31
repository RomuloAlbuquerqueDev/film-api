const crypto = require('crypto');
const axios = require('axios');
const database = require("../config/database/database");
const Entity = require("../film-api/model/filmModel");
const express = require('express');
const app = express();
app.use(express.json());

const generate = function () {
    return crypto.randomBytes(20).toString('hex');
};

const request = function (url, method, data) {
    return axios({ url, method, data });
};

//TESTE UNITÁRIO - REPOSITORY
const deleteAllRepository = async () => {
    await database.sync();
    await Entity.destroy({ where: {}, truncate: true })
    return null;
}
test("Deve deletar todos os filmes - repository", async function () {
    await deleteAllRepository();
    list = Entity.findAll();

    expect(list.length == 0);
});

//TESTE UNITÁRIO - REPOSITORY
const createRepository = async (create) => {
    await database.sync();
    let entity = await Entity.create({
        title: create.title,
        director: create.director,
    });
    return entity;
};
test('Deve cadastrar um filme - repository', async function () {
    let film = {};
    film.title = generate();
    film.director = generate();

    const result = await createRepository(film);

    await Entity.destroy({ where: {}, truncate: true })

    expect(film.title === result.title);
    expect(film.director === result.director);

});

//TESTE UNITÁRIO - SERVICE
const createService = function (create) {
    return createRepository(create);
};
test('Deve cadastrar um filme - service', async function () {
    let film = {};
    film.title = generate();
    film.director = generate();

    const result = await createService(film);

    await Entity.destroy({ where: {}, truncate: true })

    expect(film.title === result.title);
    expect(film.director === result.director);

});