import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import LogoImg from "../../assets/logo.svg";

import "./styles.css";

import api from "../../services/api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const history = useHistory();

  async function handleRegister(event) {
    event.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };

    try {
      // Chamando a API e cadastrando os dados:
      const response = await api.post("/ongs", data);

      alert(`Seu ID de acesso ${response.data.id}`);
      history.push('/'); // Levando o usuário para a rota home.
    } catch (err) {
      console.log(err);
      alert('Não foi possível cadastrar, tente novamente.');
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={LogoImg} alt="Be The  Hero" />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude a encontrarar os
            casos de sua ONG.
          </p>

          <Link to="/" className="back-link">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home.
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            value={name}
            onChange={event => setName(event.target.value)}
            required
          />

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
            required
          />

          <input
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={event => setWhatsapp(event.target.value)}
            required
          />

          <div className="input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={event => setCity(event.target.value)}
              required
            />

            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={event => setUf(event.target.value)}
              required
            />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
