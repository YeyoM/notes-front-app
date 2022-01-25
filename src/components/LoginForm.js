import React, { useState } from 'react'
import Togglabel from './Togglabel'

export default function LoginForm({ handleLoginSubmit }) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const credentials = {
      username,
      password
    }
    handleLoginSubmit(credentials)
    setUsername('')
    setPassword('')
  }

  return (
    <Togglabel buttonLable='Show loggin'>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Username"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
        </div>
        <button>Login</button>
      </form>
    </Togglabel>
  )
}