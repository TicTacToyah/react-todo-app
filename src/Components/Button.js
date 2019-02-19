import React, { Component } from 'react';
import styled from 'styled-components'

const StyledButton = styled.button`
background-color: blue;
height: 50px;
width: 100px;
&:hover {
  background-color: hotpink;
}
`

class Button extends Component {
  render() {
    return ( <StyledButton> { this.props.buttonText  } </StyledButton>
    )
  }
}

export default Button 