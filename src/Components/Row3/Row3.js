import React, { Component } from 'react'
import './Row3.css';
class Row3 extends Component {
    state = { count: 2 }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    }
    render() {
        return (
            <div className="container">
                <div className="text">
                    <h2>This is a sample project Test</h2>
                    <h3>This is a sample project Test</h3>
                    <p>This is a sample project Test</p>
                </div>
                <div className="item">
                    <h1>{this.state.count}</h1>
                    <button onClick={this.increment}>Add</button>
          <button onClick={this.decrement}>Minus</button>
                </div>

            </div>
        )
    }
}

export default Row3
