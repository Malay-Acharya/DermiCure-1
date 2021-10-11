import React from 'react'
import './Footer.css'
import logo from './logo.png'

function Footer() { 

    return (
        <div>
        <footer>
        <div className="footer-img">
            #dermiCURE
        </div>
        <div className="main-footer">
            <div className="footer-logo">
                <img src={logo} className="logo-img"/>
                <span className="logo-text">dermiCURE</span>
            </div>
            <div className="footer-nav">
                <span className="footer-nav-heading">Navigate</span>
                <ul className="footer-nav-list">
                    <li className="footer-nav-items">About Us <span className="arrow-footer f1"><i className="fas fa-arrow-right"></i></span></li>
                    <li className="footer-nav-items">Home <span className="arrow-footer"><i className="fas fa-arrow-right"></i></span></li>
                    <li className="footer-nav-items">Home <span className="arrow-footer"><i className="fas fa-arrow-right"></i></span></li>
                    <li className="footer-nav-items">Home <span className="arrow-footer"><i className="fas fa-arrow-right"></i></span></li>
                </ul>
                <div className="btn-text">
                    <button className="btn btn-footer" id="ft-1">
                        Predict
                    </button>
                    <button className="btn btn-footer" id="ft-2">
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
            <div className="contact">
                <span className="footer-nav-heading contact-text">Contact US</span>
                <ul className="contact-list">
                    {/* <li className="contact-peeps">Malay Acharya <span className="footer-icons malay" ><i className="fab fa-linkedin-in"></i> @</span></li> */}
                    <li className="contact-peeps">Vedanta Koul <span className="footer-icons ved"><i className="fab fa-linkedin-in"></i> @</span></li>
                    <li className="contact-peeps">Drishti Awasthi <span className="footer-icons drishti"><i className="fab fa-linkedin-in"></i> @</span></li>
                    <li className="contact-peeps">Abhinandan Thakur <span className="footer-icons abhi"><i className="fab fa-linkedin-in"></i> @</span></li>
                    <li className="contact-peeps">Komal Dhall <span className="footer-icons komal" ><i className="fab fa-linkedin-in"></i> @</span></li>
                </ul>
            </div>
            <div className="footer-icons">

            </div>
        </div>
        <div className="copyright">
            &copy;2021 Team GoodFellas. All rights Reserved.
        </div>
    </footer>
        </div>
    )
}
export default Footer
