import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import "./styles.css";

import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

import api from "../../services/api";

export default function Logon() {
  const [id, setId] = useState("");

  const history = useHistory();

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const response = await api.post("session", { id });

      // Salvando o ID e o nome da ONG para que todas as rotas possam ter acesso:
      localStorage.setItem("ongID", id);
      localStorage.setItem("ongName", response.data.name);
      history.push('/profile');
    } catch (err) {
      alert("Falha no login, tente novamente.");
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu Logon</h1>

          <input
            placeholder="Seu ID"
            value={id}
            onChange={event => setId(event.target.value)}
          />

          <button type="submit" className="button">
            Entrar
          </button>

          <Link to="/register" className="back-link">
            <FiLogIn size={16} color="#E02041" />
            Crie sua conta!
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
