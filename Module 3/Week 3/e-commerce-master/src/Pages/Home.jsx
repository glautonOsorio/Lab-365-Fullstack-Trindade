import React, { Link } from 'react-router-dom';
import Header from '../Components/Header';
import '../Styles/Home.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home-content">
        <div className="home-divider">
          <Link to="/produtos">
            <button type="button" className="home-button">
              Nossos Produtos
            </button>
          </Link>
        </div>
        <div>
          <div>
            <p>Seja bem vindo</p>
            <p>Dê uma olhada em nosso estoque</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
