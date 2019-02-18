import React, {
  Component
} from 'react'
import './App.css'
import Title from './Components/Title'
import Todos from './Components/Todos'
import Form from './Components/Form'

class App extends Component {
  state = {
    todos: [
      {text: 'Walk the Dog', checked: false},
      {text: 'Walk the Cat', checked: false},
      {text: 'Feed Bird', checked: false}
    ]
  }

  addTodo = todo => {

    if(todo) {
      this.setState({
        todos: [
          ...this.state.todos,
          {text: todo, checked: false}
        ],
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
       <Form addTodo={this.addTodo}/>
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