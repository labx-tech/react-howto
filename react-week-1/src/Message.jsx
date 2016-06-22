import React, { PropTypes, Component } from 'react';

export default class Message extends Component {
  render() {
    return (
      <div>Hello { this.props.name }</div>
    );
  }
}

Message.propTypes = {
	name: PropTypes.string.isRequired
}