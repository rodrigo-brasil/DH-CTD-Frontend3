import React from 'react';
import { useState, useEffect } from 'react';
import { viacepApi } from '../../services/api';
import { Link, useParams } from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';
import { FaSearch } from 'react-icons/fa'



function ViaCep() {

    const { cep } = useParams();
    const [resultado, setResultado] = useState({});

    useEffect(() => {
        if (cep)
            getCep({ cep })

    }, [cep])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const pesquisa = data.get('pesquisa');

        getCep({ cep: pesquisa })
    }


    const getCep = ({ cep }) => {
        viacepApi.get(`/${cep}/json/`)
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

            <form onSubmit={handleSubmit}>
                <label htmlFor="pesquisa">Digite o CEP</label>
                <div className="input-group mb-3">
                    <input
                        className="form-control"
                        type="text"
                        id="pesquisa"
                        name="pesquisa"
                        placeholder="CEP"
                    />
                    <button className="btn btn-primary subimit" type="submit"> <FaSearch className="me-1"/> Buscar</button>
                </div>
            </form>
            {/* mostrar resultado */}
            <div>
                {resultado.cep && (
                    <>
                        <h2 className="text-center mt-3">Resultado</h2>
                        <ul className="list-group">
                            <li className="list-group-item">CEP: <strong>{resultado.cep}</strong> </li>
                            <li className="list-group-item">Logradouro: <strong>{resultado.logradouro}</strong></li>
                            <li className="list-group-item">Complemento: <strong>{resultado.complemento}</strong></li>
                            <li className="list-group-item">Bairro: <strong>{resultado.bairro}</strong></li>
                            <li className="list-group-item">Localidade: <strong>{resultado.localidade}</strong></li>
                            <li className="list-group-item">UF: <strong>{resultado.uf}</strong></li>
                        </ul>
                        <Link className="btn btn-outline-secondary mt-3" to={`/brasilapi/${resultado.cep}`}>Pesquisar no Brasil api</Link>
                    </>
                )}
            </div>
        </section>
    );
}

export default ViaCep;
