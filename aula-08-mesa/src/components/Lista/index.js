import React, { Component } from 'react'


export default class Lista extends Component {

    constructor(props) {
        super(props)

        this.state = {
            listaHistorico: props.listaItens,
        }
    }

    resetarLista = () => {
        this.setState({
            listaHistorico: this.props.listaItens,
        })
    }

    removeItem = (id) => {
        const lista = this.state.listaHistorico.filter(item => item.id !== id)
        this.setState({
            listaHistorico: lista
        })
    }

    render() {
        return (
            <>
                <div className="container">
                    <button className="btn btn-primary" onClick={this.resetarLista}>Resetar</button>
                    <ul>
                        {
                            this.state.listaHistorico.map(({ id, nome, url, preco }) =>
                                <li className="card" key={id} onClick={() => this.removeItem(id)}>
                                    <h2 className="card-title">{nome}</h2>
                                    <img className="card-img-top" src={url} alt={nome}></img>
                                    <div className="card-body">
                                        <p className="card-text">{preco}R$</p>
                                    </div>
                                </li>)
                        }
                    </ul>
                </div>
            </>
        )
    }
}


