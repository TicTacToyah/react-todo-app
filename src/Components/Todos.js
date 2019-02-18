import React, { Component} from 'react';

class Todos extends Component {
    render() {
        return ( <ul> { this.props.todos.map((todo, i) =>
                    <li key = { todo.text } >
                    <input type = 'checkbox' onChange = {() => this.props.onChangeTodoStatus(i) }/>
                     <span style = {{textDecoration: todo.checked ? 'line-through' : null} } > { todo.text } </span>
                      <button className = 'delete-button'
                    style = {{ color: 'red',
                            backgroundColor: 'green'}}
                    onClick = {() => this.props.onDeleteClick(i) }>x</button> 
                    </li> )} </ul>
        )
    }
}

export default Todos