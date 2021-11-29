import React from 'react';
import { useState, useEffect } from 'react';
import { brasilApi } from '../../services/api';
import { Link, useParams } from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';
import { FaSearch } from 'react-icons/fa';

function ViaCep() {

  const { cep } = useParams();
  const [resultado, setResultado] = useState({});

  useEffect(() => {
    if (cep)
      getCep({ cep })

  }, [cep])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target)
    const data = new FormData(e.target);
    const cep = data.get('cep');
    getCep({ cep })
  }

  const getCep = ({ cep }) => {
    brasilApi.get(`/${cep}`)
      .then(response => {
        setResultado(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }


  return (
    <section className="container">

      <h1>
        <Link className="btn btn-outline-primary me-3" to="/">
          <TiArrowBackOutline />
          Voltar</Link>
        Brasil API </h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="cep">Digite o CEP</label>
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="text"
            id="cep"
            name="cep"
            placeholder="CEP"
          />
          <button className="btn btn-primary" type="submit"><FaSearch className="me-1"/>Buscar</button>
        </div>
      </form>
      {/* mostrar resultado */}
      <div>
        {resultado.cep && (
          <>
            <h2 className="text-center mt-3" >Resultado</h2>
            <ul className="list-group">
              <li className="list-group-item">CEP: <strong>{resultado.cep}</strong> </li>
              <li className="list-group-item">Estado: <strong>{resultado.state}</strong></li>
              <li className="list-group-item">Cidade: <strong>{resultado.city}</strong></li>
              <li className="list-group-item">Bairro: <strong>{resultado.neighborhood}</strong></li>
              <li className="list-group-item">Localidade: <strong>{resultado.street}</strong></li>
            </ul>
            <Link className="btn btn-outline-secondary mt-3" to={`/viacep/${resultado.cep}`}>Pesquisar no ViaCep</Link>
          </>
        )}
      </div>
    </section>
  );
}

export default ViaCep;
