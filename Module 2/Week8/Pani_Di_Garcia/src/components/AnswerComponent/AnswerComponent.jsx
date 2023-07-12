import Accordion from "react-bootstrap/Accordion";
import "../Faq/Faq.css";

const Answer = ({ resposta }) => {
  return <Accordion.Body>{resposta}</Accordion.Body>;
};

export default Answer;
