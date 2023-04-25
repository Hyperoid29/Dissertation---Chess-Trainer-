import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

import fb from '../../assets/icons8-facebook-480.png'
import linkedin from '../../assets/icons8-linkedin-circled-480.png'
import insta from '../../assets/icons8-instagram-480.png'



export default function Footer() {
    return (
        <div className='footerName'>
            <div className='sb__footer section__padding'>
                <div className="sb__footer-links">
                    <div className='sb__footer-links_div'>
                        <h4>Play</h4>
                        <a href='/employer'>
                            <p>Play Vs AI</p>
                        </a>
                        <a href='/healthplan'>
                            <p>Ranked</p>
                        </a>
                        <a href='/individual'>
                            <p>Analysis</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Stats</h4>
                        <a href='/resource'>
                            <p>Analytics</p>
                        </a>

                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Questions?</h4>
                        <a href="/FAQ">
                            <p>FAQ</p>
                        </a>
                    </div>

                    <div className="sb__footer-links_div">
                        <h4>Contact Me On</h4>
                        <div className="socialmedia">
                            {/*Facebook icon by Icons8*/}
                            <p><img src={fb} alt="" /></p>
                            {/*LinkedIn icon by Icons8*/}
                            <a href="https://www.linkedin.com/in/shreevatsa-nayak-6534431b3/">
                                <p><img src={linkedin} alt="https://www.linkedin.com/in/shreevatsa-nayak-6534431b3/" /> </p>
                            </a>
                            {/*Instagram icon by Icons8*/}
                            <p><img src={insta} alt="" /></p>
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} Shreevatsa Nayak. All right reserved
                        </p>
                    </div>
                    <div className="sb__footer-below-links">

                    </div>
                </div>

            </div>
        </div>
    )
}
