import { useContext, useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import Location from "../../components/Location/Location";
import { BannerContext } from "../../contexts/BannerContext";

const ContactPage = () => {
  const { setBannerData } = useContext(BannerContext);

  useEffect(() => {
    setBannerData({
      title: "Deixe uma mensagem ou",
      subTitle: "Venha visitar nossa padaria",
    });
  }, []);
  return (
    <>
      <div className="contactPage">
        <Header />
        <Banner />
        <Form />
        <Location />
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
