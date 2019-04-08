import React from 'react';

export default class Logout extends React.Component {

  componentDidMount() {
    localStorage.removeItem('jwt');
    this.props.history.push('/login');
  }

  render() {
    return (
      <h2>Logout</h2>
    )
  }
}