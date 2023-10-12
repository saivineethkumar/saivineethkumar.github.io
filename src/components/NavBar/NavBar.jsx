import React from 'react';
import "./navbar.css";
import {Link} from 'react-scroll'
import logo from "../../assets/logo.png"
import contactImg from "../../assets/contact.png"

export default function NavBar() {
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='desktopMenu'>
            <Link className='desktopMenuListItem'>Home</Link>
            <Link className='desktopMenuListItem'>About</Link>
            <Link className='desktopMenuListItem'>Portfolio</Link>
            <Link className='desktopMenuListItem'>Client</Link>
        </div>
        <button className='desktopMenuBtn' >
            <img src={contactImg} alt='Contact' className='desktopMenuImg' />Contact Me
        </button>
    </nav>
  )
}
