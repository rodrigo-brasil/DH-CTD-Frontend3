import React, { Component } from 'react';
import Button from '../Button';
import "./style.scss";

export default class Counter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: props.time
        }
    }

    resetCounter = () => {
        clearInterval(this.interval)
        this.setState({
            count: this.props.time
        })
    }

    stopCounter = () => {
        clearInterval(this.interval)
    }

    continueCounter = () => {
        clearInterval(this.interval)
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            })
        }, 1000)
    }


    componentDidMount() {
        this.continueCounter()
    }

    componentDidUpdate() {
        if (this.state.count === 0) {
            clearInterval(this.interval)
        }
    }


    render() {
        return (
            <div className="counter">
                <p>{this.state.count}</p>
                <div>
                    <Button onClick={this.continueCounter} name="Continuar" />
                    <Button onClick={this.stopCounter} name="Parar" />
                    <Button onClick={this.resetCounter} name="Resetar" />
                </div>
            </div>
        )
    }
}
