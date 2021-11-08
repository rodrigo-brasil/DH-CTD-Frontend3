import React, { Component } from 'react'

export default class Convidados extends Component {

    render() {
        return (
            this.props.convidados.map((convidado) => {
                return (
                    <li key={convidado.nome}>
                        {convidado.nome} está convidado para festa.
                    </li>
                )
            })
        )
    }
}