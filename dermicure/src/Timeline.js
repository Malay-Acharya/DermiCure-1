import React from 'react'
import './Timeline.css'

function Timeline() {
  return (
    <div className="timeline-div">
      
      <ul  className="timeline-ul">
        <li className="timeline-li">
          <div className="icon"><i class="fas fa-mobile-alt"></i> </div>
          <div className="li-heading">
          Click a Pic
          </div>
          <div className="li-about">
          Take a Picture of the infected area
          </div>

        </li>

        <li className="timeline-li">
        <div className="icon"><i class="fas fa-upload"></i> </div>
          <div className="li-heading">
          Upload on the website          </div>
          <div className="li-about">
          Upload the image in the upload image dialog box in the predict section of the website.

          </div>

        </li>

        <li className="timeline-li">
        <div className="icon"><i class="fas fa-clipboard-list"></i> </div>
          <div className="li-heading">
          Get final Report
          </div>
          <div className="li-about">
          Click predict and we will do the rest of the work for you.

          </div>

        </li>

      </ul>

      
    </div>
  )
}

export default Timeline

