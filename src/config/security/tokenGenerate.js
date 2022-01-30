const jwt = require("jsonwebtoken");
const security = require('../../config/security/security');

const key = security.secretkey();
exports.tokenGenerate = function () {
    let tomorow = new Date();
    tomorow.setDate(tomorow.getDate() + 1);
    return jwt.sign(
        {
            exp: tomorow.getTime(),
        },
        secretKey = key
    );
}