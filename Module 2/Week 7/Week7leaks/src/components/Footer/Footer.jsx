import React, { useState } from "react";

function Footer() {
  const initialState = [
    { id: 1, country: "Austria" },
    { id: 2, country: "Belgium" },
    { id: 3, country: "Canada" },
  ];

  const [data, setData] = useState(initialState);

  const updateState = (event) => {
    let nome = event.target.value;
    const newState = data.map((obj) => {
      // 👇️ if id equals 2, update country property
      if (obj.id === 2) {
        return { ...obj, country: nome };
      }

      // 👇️ otherwise return the object as is
      return obj;
    });

    setData(newState);
  };

  const searchCountry = (e) => {
    const findCountry = data.find((obj) => {
      return obj.id === e;
    });
    if (!findCountry === data?.id) {
      return alert("Seu id não existe");
    } else {
      return findCountry;
    }
  };

  const showFind = () => {
    if (!findCountry) {
      alert("wrong");
    }
    findCountry.map((item) => {
      <div key={item.id}>
        <h2>id: {item.id}</h2>
        <h2>country: {item.country}</h2>
        <hr />
      </div>;
    });
  };

  return (
    <div>
      <input type="text" onChange={updateState} placeholder="Write a name" />

      {/*data.map((obj) => {
        return (
          <div>
            <h2>id: {obj.id}</h2>
            <h2>country: {obj.country}</h2>
            <hr />
          </div>
        );
      })*/}
      <form typeof="submit">
        <input typeof="text" onChange={searchCountry} placeholder="Search Id" />
        <button
          onClick={() => {
            if (!findCountry) {
              alert("wrong");
            }
            findCountry.map((item) => {
              <div key={item.id}>
                <h2>id: {item.id}</h2>
                <h2>country: {item.country}</h2>
                <hr />
              </div>;
            });
          }}
        >
          Botão
        </button>
      </form>
    </div>
  );
}

export default Footer;
