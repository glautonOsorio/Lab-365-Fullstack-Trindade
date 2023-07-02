import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const BannerContext = createContext({
  bannerData: { title: "", subTitle: "" },
  setBannerData: () => {},
});

export const BannerProvider = ({ children }) => {
  const [bannerData, setBannerData] = useState({
    title: "Bem Vindo",
    subTitle: "a nossa loja virtual",
  });

  return (
    <BannerContext.Provider value={{ bannerData, setBannerData }}>
      {children}
    </BannerContext.Provider>
  );
};

BannerProvider.propTypes = {
  children: PropTypes.node,
};
