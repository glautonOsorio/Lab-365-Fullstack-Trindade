import "./styles/App.css";
import googleLogo from "./images/google-logo-1.png";
import Header from "./components/Header.js";
import Main from "./components/main.js";
import Footer from "./components/footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
export default App;
