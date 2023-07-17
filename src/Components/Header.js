import React from 'react'
import './Header.css'

const Header = (props) => {
  console.log(props);
  return (
    <header>
    <h1>Logo</h1>
        <nav>
            <p>Contact</p>
            <p>Address</p>
            <p>About us</p>
        </nav>
        <button className='LoginBtn' onClick={props.openShowReg}>{props.text===true ? "Login" : "Logout"}</button>
    </header>
  )
}

export default Header
