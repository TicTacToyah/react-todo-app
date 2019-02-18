import React, {
    Component
} from 'react';

class Title extends Component {
    render() {
        const { text, type} = this.props
        if (type === 'h1')
        {return <h1>{text}</h1>}
        else if (type === 'h2')
        {return <h2>{text}</h2>}
        else
        {return {text}}
        
        }
    }

    export default Title