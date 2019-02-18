import React, {
  Component
} from 'react';

class Button extends Component {
  render() {
    const styling = {
      backgroundColor: 'blue',
      height: '50px',
      width: '100px'
    }

    return ( <button style = { styling }> {
 this.props.buttonText
      } </button>
    )
  }
}

export default Button