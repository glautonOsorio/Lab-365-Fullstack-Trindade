import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";

import Focaccia from "../../assets/FocacciacomTopping.jpeg";
import BoloPaçoca from "../../assets/BolodePaçoca.jpeg";
import TortaGanache from "../../assets/Tortaganache.jpeg";

export const ProductPage = () => {
  const products = [
    {
      id: 0,
      name: "Focaccia",
      description:
        "Um pão Italino bem fofo e crocante, com bastante azeite e recheio de sua escolha",
      price: 50.0,
      image: Focaccia,
    },
    {
      id: 1,
      name: "Torta de Ganache",
      description:
        "Uma torta de biscoito com manteiga e com recheio de ganache de chocolate",
      price: 20.0,
      image: TortaGanache,
    },
    {
      id: 2,
      name: "Bolo de Paçoca",
      description:
        "Um bolo de massa de paçoca com 2 camadas de brigadeiro de paçoca, cobertura de ganache de chocolate amargo e paçoca quebrada como decoração",
      price: 30.0,
      image: BoloPaçoca,
    },
  ];

  return (
    <>
      <Header />
      <Banner title="5767567563" subTitle="testesfastgfagfgateste" />
      <Card itens={products} />
      <Footer />
    </>
  );
};
