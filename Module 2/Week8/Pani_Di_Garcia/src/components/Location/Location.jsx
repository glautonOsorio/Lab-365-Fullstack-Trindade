import "./Location.css";
const Location = () => {
  return (
    <div className="locationContainer">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4114.771598989762!2d12.086810443371895!3d43.17627869047181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132c0068b7ea6b0d%3A0x4d67ed921aa800da!2s06069%20Isola%20Maggiore%20Province%20of%20Perugia%2C%20Italy!5e0!3m2!1sen!2sbr!4v1688287477625!5m2!1sen!2sbr"
        width="600"
        height="450"
      ></iframe>
      <div className="locationSecondContainer">
        <span className="locationTitle">Local</span>
        <div className="locationContent">
          <div className="locationList">
            <li>Isola Maggiore, 06069, Tuoro sul Trasimeno</li>
            <li>Province of Perugia, Italy</li>
          </div>
          <div className="locationList">
            <li>+99 85 1871-8094</li>
            <li>kyoukugenryu@gmail.com</li>
          </div>
          <span className="locationSpan">
            Aberto de 07h00 as 18h00 de segunda a sexta e 08h00 as 14h00 nos
            sabados e domingos
          </span>
        </div>
      </div>
    </div>
  );
};

export default Location;
