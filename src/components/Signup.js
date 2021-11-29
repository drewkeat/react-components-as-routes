import React, { Component } from 'react'

export class Signup extends Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <div>
              <input type="text" name="username" placeholder="Username"/>
              <label htmlFor="username">Username</label>
            </div>
            <div>
              <input type="password" name="password" />
              <label htmlFor="password">Password</label>
            </div>
            <input type="submit" value="Sign Up" />
          </div>
        </form>
      </div>
    )
  }
}

export default Signup
