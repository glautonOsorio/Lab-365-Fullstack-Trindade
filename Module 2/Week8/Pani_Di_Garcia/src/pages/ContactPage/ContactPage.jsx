import { createContext } from "react";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import Location from "../../components/Location/Location";
import { BannerContext, BannerProvider } from "../../contexts/BannerContext";

const ContactPage = () => {
  const { setBannerData } = createContext(BannerContext);
  setBannerData({ title: "57673", subTitle: "tgfagfgateste" });
  return (
    <>
      <BannerProvider>
        <Header />
        <Banner />
        <Form />
        <Location />
        <Footer />
      </BannerProvider>
    </>
  );
};

export default ContactPage;
