import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Faq.css";

const Faq = () => {
  return (
    <div className="faqBackground">
      <div className="faqContainer">
        <div className="faqSubmit">
          <Form.Control
            placeholder="Procure uma pergunta"
            aria-label="Procure uma pergunta"
            aria-describedby="basic-addon2"
          />
          <Button
            className="faqBtn"
            variant="outline-secondary"
            id="button-addon2"
          >
            Procurar
          </Button>
        </div>
        <div className="faqAccordion">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Quantos funcionarios trabalham para sua padaria?
              </Accordion.Header>
              <Accordion.Body>
                1 de nós equivale a 100, não a um numero exato, nós apenas
                existimos
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Porque a padaria fica na Italia?
              </Accordion.Header>
              <Accordion.Body>
                Pois minha familia tem o sangue italiano, e para honrar a
                cultura decimos criar uma padaria na nossa terra natal
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                O quão bom é as suas receitas?
              </Accordion.Header>
              <Accordion.Body>
                Você ira sentir a sua vida passada ao comer uma de minhas
                receitas
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Quem é Robert Garcia?</Accordion.Header>
              <Accordion.Body>Ninguem precisa saber</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
