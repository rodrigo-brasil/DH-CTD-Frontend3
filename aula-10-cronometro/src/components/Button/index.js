import React, { Component } from 'react'
import "./style.scss"

export default class Button extends Component {


    render() {
        return (
            <button className="btn" onClick={() => this.props.onClick()}>
                {this.props.name}
            </button>
        )
    }
}
