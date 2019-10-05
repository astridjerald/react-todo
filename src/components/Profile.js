import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import TodoList from './ui/TodoList';
import StateProvider from './wrappers/StateProvider';

class Profile extends Component {
  constructor() {
    super()

    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    console.log(decoded.identity)
    this.state = {
      UserId: decoded.identity.UserId,
      first_name: decoded.identity.first_name,
      last_name: decoded.identity.last_name,
      email: decoded.identity.email,
      errors: {}
    }
  }


  render() {
    console.log("Profile userid", this.state.UserId)
    return (
      <StateProvider UserId={this.state.UserId}>
        <TodoList />
      </StateProvider>
    )
  }
}

export default Profile
