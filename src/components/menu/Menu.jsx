import React from 'react'
import "./menu.css"

const Menu = () => {
  return (
    <div className='menu'>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact us</a></li>
        </ul>
    </div>
  )
}

export default Menu