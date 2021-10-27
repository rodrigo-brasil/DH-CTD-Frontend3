import React from 'react'

export default function FunctionComponent({convidados}) {
    return (
        convidados.map(convidado => <li>{convidado.nome} trará {convidado.tarefa}</li>)
    )
}
