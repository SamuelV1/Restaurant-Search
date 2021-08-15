import React, { Component } from 'react'




export default class main extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }

    myChangeHandler = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    printar = () => {
        console.log("Aaaa")
    }

    render() {
        return (
            <div>
                <button onClick={() => { this.setState({ counter: this.state.counter + 1 }) }}>++</button>
                {this.state.counter}
                <button onClick={() => { this.printar2() }}></button>
            </div>
        )
    }
}
