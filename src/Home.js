import React from 'react'
import { NavLink } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <NavLink to="/greetings"><span>Greetings</span></NavLink>
    </div>
  )
}
