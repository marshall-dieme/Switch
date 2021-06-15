import React, { Component } from "react";

import "./Banner.css";
import icon from './img/multiscreen.png'

export default class Banner extends Component {
  render() {
    return (
      <section className="banner">
        <div className="content">
            <div className="text">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iste
                atque laudantium, a dolor necessitatibus adipisci veritatis.
                Eligendi ipsa doloremque maiores ea nam nulla eveniet? Fugit dolor
                provident ullam in?
            </p>
            </div>
            <div className="icon">
                <img src={icon} alt="" />
            </div>
        </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" 
                fill-opacity="1" 
                d="M0,64L60,96C120,128,240,192,360,218.7C480,245,600,235,720,213.3C840,192,960,160,1080,165.3C1200,171,1320,213,1380,234.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                ></path>
        </svg> */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </section>
    );
  }
}
