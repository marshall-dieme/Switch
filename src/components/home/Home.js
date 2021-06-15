import React, { Component } from 'react'

import Banner from './banner/Banner'
import Service from './service/Service'
import Temoignages from './temoignage/Temoignages'
import Team from './team/Team'

import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <div >
                <section className="banner-section">
                    <Banner/>
                </section>
                <section className="service-section main-section">
                    <div className="section-title">
                        <h2>Services</h2>
                    </div>
                    <Service/>
                </section>
                <section className="main-section">
                <div className="section-title">
                        <h2>Team</h2>
                    </div>
                    <Team/>
                </section>
                {/* <section>
                    <Temoignages/>
                </section> */}
            </div>
        )
    }
}
