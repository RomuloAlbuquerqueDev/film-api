const router = require('express').Router();
const { create, read, readById, update, del, readByEmail } = require("../controller/userController");
const security = require('../../config/security/security');

const secretKey = security.secretkey();
const jwtMiddleware = require("express-jwt")({
	secret: secretKey
});

router.post('/create', jwtMiddleware, create);

router.get('/read', jwtMiddleware, read);

router.get('/read/:id', jwtMiddleware, readById);

router.put('/update/:id', jwtMiddleware, update);

router.delete('/delete/:id', jwtMiddleware, del);

router.get('/read/:email', jwtMiddleware, readByEmail);


module.exports = router;