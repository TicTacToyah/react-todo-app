import React, {
  Component
} from 'react'
import styled from 'styled-components'
import Input from './Input'
import Button from './Button'

const colors = {
  background: 'steelblue'
}

const StyledForm = styled.form `
padding: 10px;
background: ${colors.background};
border: 2px solid ${props => (props.isNotEmpty ? 'green' : 'papayawhip')};
`

export default class Form extends Component {
  state = {
    tempTodo: '',
  }

  onInputChange = e => {
    this.setState({
      tempTodo: e.target.value
    })
    console.log(this.state.tempTodo)
  }

  submitHandler = e => {
    e.preventDefault()
    this.props.addTodo(this.state.tempTodo)
    this.setState({
      tempTodo: ''
    })
  }



  render() {
    return ( <StyledForm isNotEmpty={this.state.tempTodo} onSubmit = {this.submitHandler} >
      <Input newTodo = {this.state.tempTodo}
      onInputChange = {this.onInputChange}/> {
        this.state.tempTodo ? <Button buttonText = 'Add new Todo' /> : null} </StyledForm>
      )
    }
  }