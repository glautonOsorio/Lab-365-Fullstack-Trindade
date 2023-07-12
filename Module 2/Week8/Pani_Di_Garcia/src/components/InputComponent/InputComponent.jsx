import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "../Faq/Faq.css";
const InputComponent = () => {
  return (
    <div className="faqSubmit">
      <Form.Control
        placeholder="Procure uma pergunta"
        aria-label="Procure uma pergunta"
        aria-describedby="basic-addon2"
      />
      <Button className="faqBtn" variant="outline-secondary" id="button-addon2">
        Procurar
      </Button>
    </div>
  );
};

export default InputComponent;
