import React, { useState } from 'react'
import axios from "axios"

export const Signup = () => {
  const [formData, setFromData] = useState({
    name: "",
    email:"",
    gender: "",
    password: "",
    age: "",
    city: "",
    is_married: false,
  })

  const handlechange = (e) => {
    const {name, value} = e.target;
    setFromData({ ...formData, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://bright-bat-yoke.cyclic.app/users/register", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Name: <input type="text" name='name' onChange={handlechange} /></label>
        <br />
        <label>Email: <input type="email" name='email' onChange={handlechange} /></label>
        <br />
        <label>Gender: <input type="text" name='gender' onChange={handlechange} /></label>
        <br />
        <label>Password: <input type="password" name='password' onChange={handlechange} /></label>
        <br />
        <label>Age: <input type="text" name='age' onChange={handlechange} /></label>
        <br />
        <label>City: <input type="text" name='city' onChange={handlechange} /></label>
        <br />
        <label>Married: <input type="checkbox" name='is_married' onChange={handlechange} /></label>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
