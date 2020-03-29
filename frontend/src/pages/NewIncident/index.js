import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import LogoImg from "../../assets/logo.svg";

import "./style.css";

import api from '../../services/api';

export default function NewIncident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const ongID = localStorage.getItem('ongID');

  const history = useHistory();

  async function handleNewIncident(event) {
    event.preventDefault();

    const data = {
      title,
      description,
      value
    };

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongID
        }
      });

      history.push('/');
    } catch (err) {
      alert('Não foi possível cadastrar o caso, tente novamente.')
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={LogoImg} alt="Be The  Hero" />

          <h1>Cadastrar novo caso:</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói que possa
            resolvê-lo.
          </p>

          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para listagem de casos
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input
            placeholder="Título do caso"
            value={title}
            onChange={event => setTitle(event.target.value)}
            required
          />

          <textarea
            placeholder="Coloque a descrição do caso"
            value={description}
            onChange={event => setDescription(event.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Valor em reais"
            value={value}
            onChange={event => setValue(event.target.value)}
            required
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
