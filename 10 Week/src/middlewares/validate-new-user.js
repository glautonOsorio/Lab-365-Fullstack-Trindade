const yup = require("yup");

const validation = yup.object().shape({
  name: yup.string("O nome deve ser uma string").required("Nome é obrigatório"),
  email: yup
    .string("O email tem que ser uma string")
    .required("Email é obrigatoório"),
  userName: yup
    .string("O UserName tem que ser uma string")
    .required("UserNamer é obrigatoório"),
  password: yup
    .string()
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .required("Senha é obrigatória"),
});

function validateNewUser(request, response, next) {
  console.log("dado original", request.body);

  try {
    validation.validateSync(request.body);
    next();
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
}

module.exports = validateNewUser;
