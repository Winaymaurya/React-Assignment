import React from 'react'
import './CSS/Footer.css'
const Footer = () => {
  return (
    <>
      <div className="mainFooter">
        <div className="category">
             <span>CATEGORIES</span>
             <ul>
                <li>Web Builder</li>
                <li>Hosting</li>
                <li>Date Center </li>
                <li>Robotic-Automation</li>
                <li>Tooling</li>
             </ul>
        </div>
        <div className="contact">
          <span  >CONTACT</span>
          <ul>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Term of Services </li>
                <li>Categories</li>
                <li>About</li>
             </ul>
        </div>
        <div className="country">
        <select name="country" >
             <option value="United States">United States</option>
             <option value="India">India</option>
             <option value="Japan">Japan</option>
   
        </select>
        </div>
      </div>
    </>
  )
}

export default Footer
