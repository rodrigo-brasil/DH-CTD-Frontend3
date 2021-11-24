import React from 'react';
import { useState } from 'react';
import { viacepApi } from '../../services/api';
import { Link } from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';



function ViaCep() {

    const [resultado, setResultado] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const pesquisa = data.get('pesquisa');

        viacepApi.get(`/${pesquisa}/json/`)
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
                CEP API </h1>
            {/* buscar cep */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="pesquisa">Digite o CEP</label>
                <div class="input-group mb-3">
                    <input
                        className="form-control"
                        type="text"
                        id="pesquisa"
                        name="pesquisa"
                        placeholder="CEP"
                    />
                    <button className="btn btn-primary subimit" type="submit">Buscar</button>
                </div>
            </form>
            {/* mostrar resultado */}
            <div>
                {resultado && (
                    <>
                        <h2>Resultado</h2>
                        <ul class="list-group">
                            <li class="list-group-item">CEP: <strong>{resultado.cep}</strong> </li>
                            <li class="list-group-item">Logradouro: <strong>{resultado.logradouro}</strong></li>
                            <li class="list-group-item">Complemento: <strong>{resultado.complemento}</strong></li>
                            <li class="list-group-item">Bairro: <strong>{resultado.bairro}</strong></li>
                            <li class="list-group-item">Localidade: <strong>{resultado.localidade}</strong></li>
                            <li class="list-group-item">UF: <strong>{resultado.uf}</strong></li>
                        </ul>
                    </>
                )}
            </div>
        </section>
    );
}

export default ViaCep;
