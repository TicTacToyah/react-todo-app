
import React, { Component } from 'react';

class Input extends Component {
    render() {
        return ( 
        <input value = { this.props.newTodo }
            onChange = { this.props.onInputChange }
            type = "text"
            placeholder = "Todo" />
        )
    }
}

export default Input