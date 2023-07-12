import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import { ProductPage } from "./pages/ProductPage/ProductPage.jsx";
import ContactPage from "./pages/ContactPage/ContactPage";
import NotFoundPage from "./pages/NotFound/NotFound";
import FaqPage from "./pages/FaqPage/FaqPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
