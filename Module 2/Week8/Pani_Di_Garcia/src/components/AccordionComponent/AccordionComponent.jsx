import Accordion from "react-bootstrap/Accordion";
import "../Faq/Faq.css";

const AccordionComponent = ({ answer, question, id }) => {
  return (
    <>
      <Accordion className="faqAccordion" defaultActiveKey="0">
        <Accordion.Item eventKey={id}>
          <Accordion.Header className="faqAccordion">
            {question}
          </Accordion.Header>
          {answer}
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default AccordionComponent;
