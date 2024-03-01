import React from 'react'
import './CSS/BuilderCard.css'
const BuilderCard = (props) => {
  return (
    <>
       <div className="mainBox">
            <div className="firstBox">
                <div className="number">{props.num}</div>
                <div className="builderImg">
                  <img src="img.png" alt="" />
                </div>
                <div className="builderName">
                    Builder 1
                </div>
                </div>
                <div className="description">
                    <span className="head"> {props.name} -</span>
                    <p>{props.desc}</p>
                    <span className="head">Main Highlights</span>
                    <p>{props.highlight}</p>
                    <div className="showMore">Show More<i class="fa fa-chevron-down" aria-hidden="true"></i></div>
                </div>
            <div className="rating">
                <div className="rate">

                <div className="numberRate">
                    {props.numRate}
                </div>
                <div className="textRate">{props.textRate}</div>
                <div className="star">
                     <i class="fa fa-star" aria-hidden="true"></i>
                     <i class="fa fa-star" aria-hidden="true"></i>
                     <i class="fa fa-star" aria-hidden="true"></i>
                     <i class="fa fa-star" aria-hidden="true"></i>
                     <i class="fa fa-star-half-o" aria-hidden="true"></i>
                     </div>
                </div>
                <div className="view">
                     View
                </div>
            </div>
       </div>
    </>
  )
}

export default BuilderCard
