const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function createLogin(request, response) {
  try {
    const userInDatabase = await User.findOne({
      where: {
        userName: request.body.userName,
      },
    });

    if (!userInDatabase) {
      return response
        .status(404)
        .json({ message: "UserName ou senha incorretos" });
    }

    const passwordIsValid = await bcrypt.compare(
      request.body.password,
      userInDatabase.password
    );

    if (!passwordIsValid) {
      return response
        .status(404)
        .json({ message: "UserName ou senha incorretos" });
    }

    const token = jwt.sign(
      {
        id: userInDatabase.id,
        name: userInDatabase.name,
      },
      process.env.CHAVE_TOKEN,
      {
        expiresIn: "1h",
      }
    );

    response.json({ name: userInDatabase.name, token: token });
  } catch (error) {
    response
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação." });
  }
}

module.exports = createLogin;
