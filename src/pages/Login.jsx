import React, { useState } from 'react'
import axios from 'axios'

export const Login = () => {
  const [formData, setFromData] = useState({
    email:"",
    password: "",
  })

  const handlechange = (e) => {
    const {name, value} = e.target;
    setFromData({ ...formData, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("bright-bat-yoke.cyclic.app/users/login", formData)
      .then((res) => {
        console.log(res);
        localStorage.setItem('token',JSON.stringify(res.data.token))
        localStorage.setItem('email',JSON.stringify(res.data.email))
      })
    .catch((err) => console.log(err));
  }
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Email: <input type="email" name='email' onChange={handlechange} /></label>
        <br />
        <label>Password: <input type="password" name='password' onChange={handlechange} /></label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
