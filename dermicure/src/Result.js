import React,{ Component } from 'react'
import './Reslut.css'
import axios from 'axios';


var Link = JSON.parse(localStorage.getItem('links'));

console.log(Link);

function Result(){
    
   return( 
        <div>
                <div className="Results">

              <div className="result">

                    Your Results
                  </div>

                <div className="Results-about">

                <div className="result-left">

<div className="result-name">
<div className="result-name-heading">  Name:</div>
    <div className="result-name-about">
  {Link}
    </div>
</div>

<div className="result-cs">
<div className="result-cs-heading">Common Symptoms:</div>
    <div className="result-cs-about">
    Basal cell carcinoma often appears as a slightly transparent bump on the skin, 
    though it can take other forms. Basal cell carcinoma occurs most often on areas of the
    skin that are exposed to the sun, such as your head and neck.A pearly white, 
    skin-coloured or pink bumpA brown, black or blue lesion A flat, scaly, reddish 
    patch A white, waxy, scar-like lesion.
    </div>
</div>

<div className="result-hospital">
<div className="result-hospital-heading">Best Hospitals For Disease:</div>
    <div className="result-hospital-about">
    Tata Memorial Hospital, Mumbai.All India Institute of Medical Sciences, New Delhi.The Cancer 
    Institute, Adyar, Chennai.Apollo Gleneagles Hospital, Kolkata.The Gujarat 
    Cancer and Research Institute, Ahmedabad.
    </div>
</div>




</div>
                <div className="result-right">

<div className="result-what">
<div className="result-what-heading">  What is it?</div>
    <div className="result-what-about">
    Basal cell carcinoma is a type of skin cancer. Basal cell carcinomabegins in the basal cells — a 
    type of cell within the skin that produces new skin cells as old ones die off.Basal cell carcinoma 
    occurs when one of the skin's basal cells develops a mutation in its DNA.Basal cells are found at the bottom of the epidermis — the outermost layer of skin.
    </div>
</div>


<div className="result-prevention">
<div className="result-prevention-heading"> Preventive Measures</div>
    <div className="result-prevention-about">
    Write down your medical history.staying in the shade.avoiding the midday 
    sun.wearing protective hats and clothing.using broad-spectrum sunscreens 
    with a minimum of 30 sun protection factor (SPF)not using tanning beds.
    </div>
</div>

</div>


                </div>
</div>
            
        </div>
    )
}

export default Result