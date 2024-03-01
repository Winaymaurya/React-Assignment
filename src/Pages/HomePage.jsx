import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import './HomePage.css'
import Footer from '../components/Footer'
import BuilderCard from '../components/BuilderCard'
const HomePage = () => {
  return (
    <>
    <Navbar/>
    <div className="homeContainer">

    <div className="heading">
    Best Website builders in the US
    </div>
    <hr />
    <div className="update">

        <span>
        <i class="fa fa-check-circle-o" aria-hidden="true"></i> Last Updated - February 22, 2020 
        </span>
        <span><i class="fa fa-info-circle" aria-hidden="true"></i>
     Advertising Disclosure</span>
     <span className='top'>Top Relevant <i class="fa fa-chevron-down" aria-hidden="true"></i></span>
    </div>
    <hr />
    <div className="links">
        <ul>
            <li>Tools</li>
            <li>Aws Builder</li>
            <li>Start Build</li>
            <li>Build Supplies</li>
            <li>Tooling</li>
            <li>BlueHosting</li>
        </ul>
    </div>
    <div className="arrowLinks">
        <ul>
            <li>Home</li> {">"}
            <li>Hosting for all</li>{">"}
            <li>Hosting</li>{">"}
            <li>Hosting6</li>{">"}
            <li>Hosting5</li>
            
        </ul>
    </div>

     <div className="best">
     <i class="fa fa-trophy" aria-hidden="true"></i> &nbsp;Best Choice
     </div>
    <BuilderCard 
    num={"1"}
    name={"WixPro 72-Inch Responsive Website Builder"} 
    desc={"Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"}
    highlight={"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides"}
    numRate={"9.8"}
    textRate={"Exceptional"}
    />


     <div className="best">    
     <i class="fa fa-diamond" aria-hidden="true"></i> &nbsp;Best Value
     </div>

     <BuilderCard 
     num={"2"}
     name={"SiteCraft 68-Inch Ultimate Web Design Studio"} 
    desc={"Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)"}
    highlight={"[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations."}
    numRate={"9.5"}
    textRate={"Excellent"}/>
    
    
    <BuilderCard 
    num={"3"}
    name={"WixPro 72-Inch Responsive Website Builder"} 
    desc={"Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"}
    highlight={"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides"}
    numRate={"9.3"}
    textRate={"Exceptional"}
    />

<div className="mainBoxHome">
            <div className="firstBox">
                <div className="number">4</div>
                <div className="builderImg">
                  <img src="img.png" alt="" />
                </div>
                <div className="builderName">
                    Builder 1
                </div>
                </div>
                <div className="description">
                    <span className="head">CDK Responsive Builder -</span>
                    <p>An extensive library of widgets and apps, and detailed step-by-step guides</p>
                    <span className="head">Main Highlights</span>
                    <div className="points">
                    <p>9.9 Building Responsive</p>
                    <p>7.9  Cool</p>
                    <p>8.9 Docs</p>
                    </div>
                    <div className="love">
                        <span>Why we love it</span>
                    </div>
                      <div className="f"><i class="fa fa-check" aria-hidden="true"></i>Documentation</div>
                      <div className="f"><i class="fa fa-check" aria-hidden="true"></i>Easy Use</div>
                      <div className="f"><i class="fa fa-check" aria-hidden="true"></i>Out of Box</div>

                    <div className="showMore">Show More<i class="fa fa-chevron-down" aria-hidden="true"></i></div>
                </div>
            <div className="rating">
                <div className="rate">

                <div className="numberRate">
                    9.1
                </div>
                <div className="textRate">Very Good</div>
                <div className="star">
                     <i class="fa fa-star" aria-hidden="true"></i>
                     <i class="fa fa-star" aria-hidden="true"></i>
                     <i class="fa fa-star" aria-hidden="true"></i>
                     <i class="fa fa-star" aria-hidden="true"></i>
                     <i class="fa fa-star-half-o" aria-hidden="true"></i>
                     </div>
                </div>
                <div className="view">
                     view
                </div>
            </div>
       </div>

    <div className="text">Related deals you might like </div>
      <div className="related">
    <Card/>
    <Card/>
    <Card/>
      </div>

      <div className="signUp">
        <div className="text">Sign up and get exclusive special deals</div>
        <div className="signUpBtn">
            SignUp
        </div>
      </div>
    </div>

    <Footer/>
    
    </>
  )
}

export default HomePage
