import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="container">
            <h1 className="my-5"> Buscar cep </h1>
            <div className="d-grid gap-2 col-6 mx-auto">
                <Link className="btn btn-primary" to="/viacep">ViaCep</Link>
                <Link className="btn btn-primary" to="/brasilapi">BrasilApi</Link>
            </div>
        </div>
    )
}
