const userRepository = require("../repository/loginRepository");

exports.login = async function (email, password) {

  const result = await userRepository.readByEmail(email);

  let permission = false;

  if (result === null) {
    console.log("E-mail não existe em nossa base de dados");
    permission = false;
  }
  else if (result.email !== email) {
    console.log("E-mail inválido");
    permission = false;
  }
  else if (result.password !== password) {
    console.log("Senha inválida");
    permission = false;

  } else if (result.password === password) {
    console.log("Seja Bem Vindo");
    permission = true;
  }
  else {
    console.log("Erro ao fazer login");
    permission = false;
  }

  return permission;
};
