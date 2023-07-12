import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";

import Focaccia from "../../public/FocacciacomTopping.jpeg";
import BoloPaçoca from "../../public/BoloDePaçoca2.jpeg";
import TortaGanache from "../../public/Tortaganache.jpeg";
import { BannerContext } from "../../contexts/BannerContext";
import { useContext, useEffect } from "react";

export const ProductPage = () => {
  const products = [
    {
      id: 0,
      name: "Focaccia",
      description:
        "Um pão Italino fofo e crocante, com bastante azeite e recheio a escolha",
      price: 50.0,
      ingredients: {
        item_1: "1kg de Farinha de Trigo",
        item_2: "450ml de Água morna ",
        item_3: "1 colher de sopa de fermento biologico de Pão",
        item_4: "3 colheres de chá de sal",
        item_5: "Azeite",
        item_6: "Sal Grosso",
      },
      image: Focaccia,
    },
    {
      id: 1,
      name: "Torta de Ganache",
      description:
        "Uma torta de biscoito com manteiga e com recheio de ganache de chocolate",
      ingredients: {
        item_1: "1kg de Farinha de Trigo",
        item_2: "450ml de Água morna ",
        item_3: "1 colher de sopa de fermento biologico de Pão",
        item_4: "3 colheres de chá de sal",
      },
      price: 20.0,
      image: TortaGanache,
    },
    {
      id: 2,
      name: "Bolo de Paçoca",
      description:
        "Um bolo com 2 camadas de brigadeiro de paçoca, cobertura de ganache de chocolate amargo e paçoca esfarelada como decoração",
      ingredients: {
        item_1: "1kg de Farinha de Trigo",
        item_2: "450ml de Água morna ",
        item_3: "1 colher de sopa de fermento biologico de Pão",
        item_4: "3 colheres de chá de sal",
        item_5: "Azeite",
        item_6: "Sal Grosso",
      },
      price: 30.0,
      image: BoloPaçoca,
    },
  ];
  const { setBannerData } = useContext(BannerContext);

  useEffect(() => {
    setBannerData({
      title: "Escolha seus produtos",
      subTitle: "Os melhores de SouthTown",
    });
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <Card itens={products} />
      <Footer />
    </>
  );
};
