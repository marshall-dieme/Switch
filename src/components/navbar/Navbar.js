import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa'

import logo from './img/logo.png'

import "./Navbar.css";

export default class Navbar extends Component {
	state = {
		clicked: false,
	};

	toggleMenu = () => {
		this.setState({
			clicked : !this.state.clicked
		})
		if (!this.state.clicked) {
			document.getElementById('nav').classList.add('active')
		}else
		document.getElementById('nav').classList.remove('active')
	}

	render() {
		return (
			<header>
				<div className="logo">
					<Link to="/" ><img src={logo} alt="" /></Link>
				</div>
				<nav id="nav">
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
				</nav>
				<div className="toggle-menu" onClick={this.toggleMenu}>
					{this.state.clicked ? <FaTimes/> : <FaBars/>}
				</div>
			</header>
		)
	}

}
