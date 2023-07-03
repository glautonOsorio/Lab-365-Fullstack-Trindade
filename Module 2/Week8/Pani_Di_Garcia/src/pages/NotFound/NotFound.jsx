import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import { BannerContext } from "../../contexts/BannerContext";
import { useContext, useEffect } from "react";

const NotFoundPage = () => {
  const { setBannerData } = useContext(BannerContext);

  useEffect(() => {
    setBannerData({
      title: "Essa pagina não existe",
      subTitle: "Recomendamos voltar pra pagina principal",
    });
  }, []);
  return (
    <>
      <Header />
      <Banner />
      <Footer />
    </>
  );
};

export default NotFoundPage;
