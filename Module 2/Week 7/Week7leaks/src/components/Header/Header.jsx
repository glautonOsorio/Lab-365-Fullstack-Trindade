import { useState } from "react";

function Header() {
  const [name, setName] = useState("Clique aqui");

  function mudarNome() {
    let novoNome = prompt("Insira seu nome");
    if (novoNome) {
      setName(novoNome);
    } else {
      setName("Clique aqui");
    }
  }

  return (
    <div>
      <nav>
        <a href="#" onClick={mudarNome}>
          Bem-vindo, {name}
        </a>
      </nav>
    </div>
  );
}

export default Header;
