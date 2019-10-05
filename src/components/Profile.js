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
      user_id: decoded.identity.user_id,
      first_name: decoded.identity.first_name,
      last_name: decoded.identity.last_name,
      email: decoded.identity.email,
      errors: {}
    }
  }


  render() {
    console.log("Profile user_id", this.state.user_id)
    return (
      <StateProvider user_id={this.state.user_id}>
        <TodoList />
      </StateProvider>
    )
  }
}

export default Profile
