import Banner from "../../components/Banner/Banner";
import Faq from "../../components/Faq/Faq";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import { BannerContext } from "../../contexts/BannerContext";
import { useContext, useEffect } from "react";

const FaqPage = () => {
  const { setBannerData } = useContext(BannerContext);

  useEffect(() => {
    setBannerData({
      title: "Aqui esta uma lista",
      subTitle: "Das perguntas mais frequentes",
    });
  }, []);
  return (
    <>
      <Header />
      <Banner />
      <Faq />
      <Footer />
    </>
  );
};

export default FaqPage;
