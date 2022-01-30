const userRepository = require("../repository/loginRepository");

exports.login = async function (email, password) {

  const result = await userRepository.readByEmail(email);

  let permission = false;

  if (result === null) {
    console.log("------------------------------------------");
    console.log("E-mail não existe em nossa base de dados");
    console.log("------------------------------------------");
    permission = false;
  }
  else if (result.email !== email) {
    console.log("-----------------");
    console.log("E-mail inválido");
    console.log("-----------------");
    permission = false;
  }
  else if (result.password !== password) {
    console.log("-----------------");
    console.log("Senha inválida");
    console.log("-----------------");
    permission = false;

  } else if (result.password === password) {
    console.log("-----------------");
    console.log("Seja Bem Vindo");
    console.log("-----------------");
    permission = true;
  }
  else {
    console.log("--------------------");
    console.log("Erro ao fazer login");
    console.log("--------------------");
    permission = false;
  }

  return permission;
};
