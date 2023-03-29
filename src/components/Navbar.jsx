import React from 'react'
import {Link} from "react-router-dom"

export const Navbar = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-around"}}>
      <Link to={"/"}>Home</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/signup"}>Signup</Link>
      <Link to={"/posts"}>Posts</Link>
    </div>
  )
}
