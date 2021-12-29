import React from 'react'
import './Predict.css'
import Upload from './Upload/Upload'
import {Link} from "react-router-dom"



function Predict() {

  
 

    return (
        <div>
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
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </nav>
    <div class="container-page2">
        <p class="function-text-3">
            Before you start <br/><span class="function-text-inner">predicting</span>
        </p>
        <p class="basic-text">
       1.There should be enough light in the room when the user is clicking the picture.
       <br/>
2.The users have to make sure that the picture is clear and not blurred.
<br/>
3.Please avoid using any kind of filters on the photos.
<br/>
4.Make sure that the images are in .jpg format.
        </p>
       
    </div>
        <Upload/> 

        </div>
    )
}

export default Predict
