import React from 'react'
import './CSS/Card.css'
const Card = () => {
  return (
    <>
    <div className="card1">
    <div className="cardImg">
          <img src="img.png" alt="" />
    </div>
    <div className="offer">
        <div className="off">20% Off</div>
        <div className="time">Limited time</div>
    </div>
    <div className="cardHeading">
        Web Builder 1
    </div>
    <div className="cardDesc">
    Computer  Modern clasic with wix support
    </div>
    <div className="price">
        <div className="mainPrice">$39.96</div>
        <div className="realPrice">$49.96</div>
        <div className="offf">(20% Off)</div>
    </div>
    <button>View Deal</button>
    </div>
    </>
  )
}

export default Card
