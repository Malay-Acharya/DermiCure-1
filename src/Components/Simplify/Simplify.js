import React from 'react'
import './Simplify.css'

function Simplify() {

    const WEdo = e =>
    {
        document.querySelector('.do-points').style.display="flex";
        document.querySelector('.dont-points').style.display="none";
        document.querySelector('.we-btn-do').style.color="black";
        document.querySelector('.we-btn-dont').style.color="#8fa0b4";

    }
    const WEdont = e =>
    {
        document.querySelector('.dont-points').style.display="flex";
        document.querySelector('.do-points').style.display="none";
        document.querySelector('.we-btn-dont').style.color="black";
        document.querySelector('.we-btn-do').style.color="#8fa0b4";

    }
    return (
        <div className="simplify">
            <div className="simplify-heading">
            To Simplify
            </div>
            <div className="simplify-about">
                <div className="we-do">
               <button  className="we-btn-do" onClick={WEdo}>
               What we do?
               </button>
                </div>
                <div className="we-dont" onClick={WEdont}>
                <button  className="we-btn-dont">
                What we don’t?
               </button>
               
                </div>
            </div>

            <div className="do-points">
                <ul className="points">
                    <div className="line-1">
                    <li className="point">
                        <div className="symbol">
                        <i class="far fa-check-circle"></i>
                        </div>
                        <div className="content">
                        Predict your skin infections.
                        </div>
                    </li>
                    <li className="point">
                        <div className="symbol">
                        <i class="far fa-check-circle"></i>
                        </div>
                        <div className="content">
                        Provide you with a detailed report on your infection.
                        </div>
                    </li>
                    </div>
                    <li className="point">
                        <div className="symbol">
                        <i class="far fa-check-circle"></i>
                        </div>
                        <div className="content">
                        Show you a list of hospitals that have a specialty 
                        in that particular disease.
                        </div>
                    </li>
                </ul>
                
            </div>
            

            <div className="dont-points">
                <ul className="points">
                    <div className="line-1">
                    <li className="point">
                        <div className="symbol">
                        <i class="far fa-times-circle"></i>
                        </div>
                        <div className="content">
                        Give you treatments and medicines for a specific infection.
                        </div>
                    </li>
                    <li className="point">
                        <div className="symbol">
                        <i class="far fa-times-circle"></i>
                        </div>
                        <div className="content">
                        Give you treatments and medicines for a specific infection.
                        </div>
                    </li>
                    </div>
                    <li className="point">
                        <div className="symbol">
                        <i class="far fa-times-circle"></i>
                        </div>
                        <div className="content">
                        Predict infections that are very severe and have reached a level that needs immediate medical attention.
                        </div>
                    </li>
                </ul>
                
            </div>
        </div>
    )
}

export default Simplify
