import "./styles.css";
import logo from "../../images/logo.svg";
import { useState } from "react";

function Header({ filterProducts }) {
  const [name, setName] = useState("");

  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <div className="searchBar">
        <input
          type="text"
          placeholder="Digitar Pesquisa"
          onChange={(event) => setName(event.target.value)}
        />
        <button className="searchBtn" onClick={() => filterProducts(name)}>
          Pesquisar
        </button>
      </div>
    </header>
  );
}

export default Header;
