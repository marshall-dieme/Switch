import React, { Component } from 'react'

import Banner from './banner/Banner'
import Service from './service/Service'
import Temoignages from './temoignage/Temoignages'
import Team from './team/Team'

export default class Home extends Component {
    render() {
        return (
            <div>
                <section>
                    <Banner/>
                </section>
                <section>
                    <Service/>
                </section>
                <section>
                    <Team/>
                </section>
                <section>
                    <Temoignages/>
                </section>
            </div>
        )
    }
}
