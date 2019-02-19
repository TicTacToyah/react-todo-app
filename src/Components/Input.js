
import React, { Component } from 'react';
import styled from 'styled-components'

    const StyledInput = styled.input `
        background-color: lightsalmon;
    border: solid darkgrey ${props => props.borderWidth}px;
    padding: 15px;
    &:focus { background-color: grey;
}`
    

class Input extends Component {
    render() {
        return ( 
        <StyledInput value = { this.props.newTodo }
            borderWidth = {this.props.newTodo.length}
            onChange = { this.props.onInputChange }
            type = "text"
            placeholder = "Todo"></StyledInput>
        )
    }
}

export default Input