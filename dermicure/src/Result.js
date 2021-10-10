import React,{ Component } from 'react'
import './Reslut.css'
import axios from 'axios';


var Link = JSON.parse(localStorage.getItem('links'));

console.log(Link);

function Result(){
    if(Link === "Bowen's disease"){
        return(
                <div>
                       {Link}
                </div>
        );
    }
    else if(Link === "basal cell carcinoma"){
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
    else if(Link === "benign keratosis-like lesions"){
        return(
            <div>
                  {Link}
            </div>
        )
    }
    else if(Link === "dermatofibroma"){
        return(
            <div>
                {Link}
            </div>
        )
    }
    else if(Link === "melanoma"){
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
Melonoma often appears as a slightly transparent bump on the skin, 
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
Melanoma is a type of skin cancer. Basal cell carcinomabegins in the basal cells — a 
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
    else if(Link === "vascular lesions"){
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
Vascular lesions are relatively common abnormalities of the skin and underlying tissues, more commonly known as birthmarks. 
There are three major categories of vascular lesions: Hemangiomas, Vascular Malformations, and Pyogenic Granulomas. 
While these birthmarks can look similar at times, they each vary in terms of origin and necessary treatment.
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
Hemangiomas are the most common type of vascular lesion in children They are benign, or noncancerous, tumors of the cells that 
line blood vessels. They usually appear at or shortly after birth as faint areas of pinkish-red discoloration of the skin and then 
quickly undergo a period of rapid growth.
</div>
</div>


<div className="result-prevention">
<div className="result-prevention-heading"> Preventive Measures</div>
<div className="result-prevention-about">
Wounds that won't heal over pressure points, such as heels or ankles.
Numbness, weakness, or heaviness in muscles.
Burning or aching pain at rest, commonly in the toes and at night while lying flat.
Restricted mobility.
Thickened, opaque toenails.
Varicose veins.
</div>
</div>

</div>


  </div>
</div>
            </div>
        )
    }
    
   return( 
        <div>
 
            
        </div>
    )
}

export default Result