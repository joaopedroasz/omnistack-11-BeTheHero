import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import "./styles.css";

import logoImg from "../../assets/logo.svg";

import api from "../../services/api";

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

  const ongId = localStorage.getItem("ongID");
  const ongName = localStorage.getItem("ongName");


  useEffect(() => {
    async function handleIncidents() {
      const response = await api.get("incidents/profile", {
        // Passando parâmetros dentro do 'header' da requisição:
        headers: {
          Authorization: ongId
        }
      });

      setIncidents(response.data);
    }

    handleIncidents();
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });

      // Filtrando os 'incidents' para quando um for removido, ele seja tirado do estado em tempo real.
      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (err) {
      alert("Erro ao deletar caso, tente novamente.");
    }
  }

  function handleLogout() {
    localStorage.clear(); // Limpando os dados de ID e Name da ONG.

    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, {ongName}.</span>

        <Link to="/incidents/new" className="button">
          Cadastrar novo caso.
        </Link>

        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos cadastrados:</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>Caso:</strong>
            <p>{incident.title}</p>

            <strong>Descrição:</strong>
            <p>{incident.description}</p>

            <strong>Valor:</strong>
            <p>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(incident.value)}
            </p>

            <button
              onClick={() => handleDeleteIncident(incident.id)}
              type="button"
            >
              <FiTrash2 size={22} color="#A8A8B3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
