import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import Moment from 'moment'


import './Footer.css'

export default class Footer extends Component {
  render() {
      var date = new Date()
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="sec about">
                        <h2>A propos</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Laudantium blanditiis natus sint omnis commodi voluptates, eum
                            maiores asperiores voluptate repudiandae. Numquam recusandae et
                            quod adipisci repellendus iusto quis doloribus molestias!
                        </p>
                    </div>
                    <div className="sec links">
                        <h2>Liens Utils</h2>
                        <ul>
						<li>
							<NavLink exact to="/" >Accueil</NavLink>
						</li>
						<li>
							<NavLink exact to="/services" >Services</NavLink>
						</li>
						<li>
							<NavLink exact to="/projects" >Nos projets</NavLink>
						</li>
						<li>
							<NavLink exact to="/about" >A propos</NavLink>
						</li>
						<li>
							<NavLink exact to="/contact" >Contact</NavLink>
						</li>
					</ul>
                    </div>
                    <div className="sec contact">
                        <h2>Contact</h2>
                        <ul>
                            <li>
                                <span><FaMapMarkerAlt/></span>
                                <span>
                                    Adresse
                                </span>
                            </li>
                            <li>
                                <span><FaPhoneAlt/></span>
                                <p>
                                    <a href="tel:+221778005739">+221 77 800 57 39</a><br />
                                    <a href="tel:+221766967176">+221 76 696 71 76</a>
                                </p>
                            </li>
                            <li>
                                <span><FaEnvelope/></span>
                                <p>
                                    <a href="mailto:switch@gmail.com">switch@gmail.com</a>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="copyrights">
                <p>
                    Copyrights &copy; Swich {Moment(date).format('YYYY')}. Tous droits reservés
                </p>
            </div>
        </div>
    );
  }
}
