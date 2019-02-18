import React, { Component } from 'react'
import Input from './Input'
import Button from './Button'

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
          this.setState({ tempTodo: '' })
      }



  render() {
    return (
        <form onSubmit={this.submitHandler}>
        <Input newTodo={this.state.tempTodo}
         onInputChange= {this.onInputChange}/>
        {this.state.tempTodo ?
      <Button buttonText={'Add new Todo'}/> : null}
      </form>
    )
  }
}


