import Answer from "../AnswerComponent/AnswerComponent";
import AccordionComponent from "../AccordionComponent/AccordionComponent";
import InputComponent from "../InputComponent/InputComponent";
import "./Faq.css";

const Faq = () => {
  const faqList = [
    { id: 0, question: "Pergunta genérica 1", answer: "Resposta genérica 1" },
    { id: 1, question: "Pergunta genérica 2", answer: "Resposta genérica 2" },
    { id: 2, question: "Pergunta genérica 3", answer: "Resposta genérica 3" },
    { id: 3, question: "Pergunta genérica 4", answer: "Resposta genérica 4" },
  ];

  return (
    <div className="faqBackground">
      <div className="faqContainer">
        <InputComponent />
        {faqList.map((faq) => {
          return (
            <AccordionComponent
              id={faq.id}
              question={faq.question}
              answer={<Answer resposta={faq.answer} />}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
