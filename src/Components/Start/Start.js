import React from 'react'
import './Start.css'
import Illustration from './Illustration/Illustration';
import {Link} from "react-router-dom"



function Start() {

    const Sidebar = e =>
  {
        document.querySelector('.popup-menu').style.display="flex";
         document.body.style.backgroundColor = "rgba(0,0,0,0.2)";
        
  }
  const Hide = e =>
  {
        document.querySelector('.popup-menu').style.display="none";
        document.body.style.backgroundColor = "rgba(255,255,255,1)";
  }
    return (
        <div className="full">
                       <nav>
       <Link to='/' style={{textDecoration:"none"}}>
       <div class="left-nav">
            <span class="header-text-1">dermi</span>
            <span class="header-text-2">CURE</span>
        </div>
       </Link>
        <div class="right-nav">
            <div class="predict">
                Predict
            </div> 
            <div class="hamburg">
            <button className="bars" onClick={Sidebar}><i class="fas fa-bars"></i></button>
                    {/* sidebar */}
            <div class="popup-menu">
        <div class="popup-close">
        <button className="cross" onClick={Hide}> <i class="fas fa-times"></i></button>
           
        </div>
        <ul class="popup-menu-li">
            <li class="popup-menu-items">Home</li>
            <li class="popup-menu-items">How We function</li>
            <li class="popup-menu-items">Contact Us</li>
            <li class="popup-menu-items">Contribute</li>
        </ul>
        <div class="btn-text">
        <Link to='/predict'>
            <button class="btn btn-predict">
              Start Predicting
            </button>
            </Link>
            <Link to='/predict'>
            <button class="btn btn-arrow">
            <i class="fas fa-arrow-right"></i>
                
            </button>
            </Link>
        </div>
    </div>

            </div>
        </div>
    </nav>
                <section>
        <div  className="left-section">
            <div   className="main-section-text">
                A MISSION TOWARDS HEALTHY <br/><span  className="main-section-text-skin">SKIN</span> 
            </div>
            <div  className="btn-text">
            <Link to='/predict'>
            <button class="btn btn-predict">
              Start Predicting
            </button>
            </Link>
            <Link to='/predict'>
            <button class="btn btn-arrow">
            <i class="fas fa-arrow-right"></i>
                
            </button>
            </Link>
            </div>
        </div>
        <div  className="right-section">          
            <Illustration/>
        </div>
    </section>
    <p  className="first-text">
    DermiCURE constructively uses a machine learning model to process images of skin lesions, patches, etc. provided by the user and accurately predicts the exact nature of the infection and along with its name. 

    </p>

    <p  className="function-text-1">
        Want to know how <br/> we <span  className="function-text-inner">function?</span>
    </p>
    
            
        </div>
    )
}

export default Start
