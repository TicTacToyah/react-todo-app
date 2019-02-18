import React, {
  Component
} from 'react'
import './App.css'
import Title from './Components/Title'
import Subtitle from './Components/Subtitle'
import Input from './Components/Input'
import Button from './Components/Button'
import Todos from './Components/Todos'
import Form from './Components/Form'

class App extends Component {
  state = {
    newTodo: '',
    todos: [
      {text: 'Walk the Dog', checked: false},
      {text: 'Walk the Cat', checked: false},
      {text: 'Feed Bird', checked: false}
    ]


  }

  addTodo = e => {
    e.preventDefault()
    
    if(this.state.newTodo) {
      this.setState({
        todos: [
          ...this.state.todos,
          {text: this.state.newTodo, checked: false}
        ],
        newTodo: ''
    })
    }
  }
  
  deleteTodo = index => {
    this.setState({
      todos: [
        ...this.state.todos.slice(0, index),
        ...this.state.todos.slice(index + 1)
      ]
    })
  }

  onInputChange = e => {
    this.setState({
      newTodo: e.target.value
    })
    console.log(this.state.newTodo)
  }
  
  onChangeCheck = index => {
    const todos = this.state.todos
    this.setState({
      todos: [
        ...todos.slice(0, index),
        {...todos[index], checked: !todos[index].checked},
        ...todos.slice(index +1)
      ]
    })
  }

  render() {
    return(
      <div>
       <Title type="h1" text={'Fancy React Todo'} />
       <Title type="h2" text={'Iam a Subtitle'} />
       <Form onSubmit={this.addTodo} newTodo={this.state.newTodo} onInputChange={this.onInputChange}/>
        <Todos 
          todos={this.state.todos} 
          onDeleteClick={this.deleteTodo} 
          onChangeTodoStatus={this.onChangeCheck}
        />
      </div>
    )
  }
}

export default App