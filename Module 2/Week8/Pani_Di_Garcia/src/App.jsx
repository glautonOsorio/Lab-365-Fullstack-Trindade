import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import { ProductPage } from "./pages/ProductPage/ProductPage.jsx";
import ContactPage from "./pages/ContactPage/ContactPage";
import NotFoundPage from "./pages/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" />
        <Route path="products" element={<ProductPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
