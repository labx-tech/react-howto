import React from 'react';
import { render } from 'react-dom';
import Message from './Message.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      name: 'Duyệt'
    }
  }

  onChange(e) {
    this.setState({name: e.target.value});
  }

  render() {
    return (
      <div>
        <input type='text' onChange={this.onChange.bind(this)} />
        <Message name={this.state.name} />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));