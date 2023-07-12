import { useState } from "react";
import "./Form.css";

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
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <div className="formContent">
          <h3 className="formTitle"> Deixe sua mensagem</h3>
          <div>
            <div className="formRow">
              <div className="formLabelInput">
                <label htmlFor="name">Nome:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Seu nome"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="formLabelInput">
                <label htmlFor="telephone">Telefone:</label>
                <input
                  type="number"
                  name="telephone"
                  id="telephone"
                  placeholder="99-9999-9999"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="formInputArea">
              <div>
                <label className="labelEmail" htmlFor="email">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="exemplo@gmail.com"
                  onChange={handleChange}
                  required
                />
              </div>
              <textarea
                className="formTextarea"
                name="message"
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="formFooter">
              <span className="formTextCount"> 0 de 500 caracteres.</span>
              <button className="formButton" type="submit">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
