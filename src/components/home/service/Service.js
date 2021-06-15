import React, { Component } from "react";
import { IoGlobeOutline, IoCreateOutline, IoApps } from 'react-icons/io5'

import "./Services.css";

export default class Service extends Component {
    render() {
        return (
            <section className="service">
                <div className="container">
                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <h2>Developpement Web</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                                    sed facilis quas qui non aperiam.
                                </p>
                            </div>
                        </div>
                        <div className="face face2">
                            <h2><IoGlobeOutline /></h2>
                        </div>
                    </div>

                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <h2>Logo Design</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                                    sed facilis quas qui non aperiam.
                                </p>
                            </div>
                        </div>
                        <div className="face face2">
                            <h2><IoCreateOutline/></h2>
                        </div>
                    </div>

                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <h2>Developpement application</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                                    sed facilis quas qui non aperiam.
                                </p>
                            </div>
                        </div>
                        <div className="face face2">
                            <h2><IoApps/></h2>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
