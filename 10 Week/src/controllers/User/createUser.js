const User = require("../../models/user");
const bcrypt = require("bcrypt");

async function createUser(request, response) {
  try {
    const userInDatabase = await User.findOne({
      where: {
        email: request.body.email,
      },
    });

    if (userInDatabase) {
      return response
        .status(409)
        .json({ message: "Já existe um usuário com essa conta" });
    }

    const hash = await bcrypt.hash(request.body.password, 10);

    const newUser = {
      name: request.body.name,
      email: request.body.email,
      userName: request.body.userName,
      password: hash,
    };

    const user = await User.create(newUser);

    const { password, ...userData } = user.toJSON();

    response.status(201).json(userData);
  } catch (error) {
    response
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação." });
  }
}

module.exports = createUser;
