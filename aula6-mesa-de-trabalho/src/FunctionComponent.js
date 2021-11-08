import React from 'react'

export default function FunctionComponent({ convidados }) {
    return (
        convidados.map(convidado => <li key={convidado.nome} >{convidado.nome} trará {convidado.tarefa}</li>)
    )
}
