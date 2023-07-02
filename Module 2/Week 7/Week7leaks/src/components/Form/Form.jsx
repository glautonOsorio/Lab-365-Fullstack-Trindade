import React, { useState } from "react";

function Form() {
  const [digimons, setDigimon] = useState([
    { name: "Tico", age: 15 },
    { name: "Piko", age: 15 },
  ]);
  let digimon = { name: "", age: 0 };

  //Salva nome digitado no input
  function saveName(e) {
    digimon.name = e.target.value;
  }
  function saveAge(e) {
    digimon.age = e.target.value;
  }

  //Adicionar digimon à lista
  function adicionar() {
    if (digimon) {
      setDigimon((digimons) => [...digimons, digimon]);
    } else {
      alert("Digite o nome de um digimon");
    }
    console.log(digimons);
  }

  return (
    <div>
      <h4>Coleção de Digimons</h4>
      <p>Seus Digimons são:</p>

      <ul>
        {digimons.map((digimon) => (
          <li key={digimon}>
            {digimon?.name} | {digimon?.age}
          </li>
        ))}
      </ul>

      <div>
        <input
          placeholder="Digite o nome do Digimon"
          type="text"
          onChange={saveName}
        />
        <input
          placeholder="Idade do Digimon"
          type="number"
          onChange={saveAge}
        />
        <button type="submit" className="btn btn-light" onClick={adicionar}>
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default Form;
