import { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    telephone: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((info) => {
      return { ...info, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3> Deixe sua mensagem</h3>
        <div>
          <div>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Seu nome"
              onChange={handleChange}
              required
            />
            <label htmlFor="telephone">Telefone</label>
            <input
              type="number"
              name="telephone"
              id="telephone"
              placeholder="99-9999-9999"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="exemplo@gmail.com"
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div>
            <span> 0 de 500 caracteres.</span>
            <button type="submit">Enviar</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
