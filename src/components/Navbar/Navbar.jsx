import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <nav className='container'>

<h1>Createnary</h1>
<ul>
<li>Cart</li>
<li>About</li>
<li>Contact</li>
<li><button className='btn'>Login</button></li>
</ul>
</nav>
  )
}

export default Navbar