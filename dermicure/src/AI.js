import React from 'react'
import './AI.css'
import aiIllustration from './ai.png'


function AI() {
    return (
       <div className=" ai-section">
            <div className="ai-section-left">
              <p className="function-text-2">
         Are you a fellow AI <br/> <span className="function-text-inner">enthusiast?</span>
     </p>

     <p className="basic-text">
     The entirety of our project is open sourced on Github, the world's largest community of developers. We invite all the machine learning enthusiasts to come and contribute to our project and make the world a better and efficient place. 
Cheers to the future!!

     </p>
     <div className="ai">


    <div className="btn-text">
        <button className="btn btn-predict">
            Contribute
        </button>
        <button className="btn btn-arrow">
            <i className="fas fa-arrow-right"></i>
        </button>
    </div>


     </div>
            
        </div>
            <div  className="ai-section-right">
                <img   className="ai-illu" src={aiIllustration}/>
            </div>
       </div>
    )
}

export default AI