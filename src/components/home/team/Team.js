import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper-bundle.css'
import SwiperCore, { Navigation } from 'swiper';
import './Team.css'

import user1 from './img/user1.jpg'
import user2 from './img/user2.jpg'
import user3 from './img/user3.jpg'

SwiperCore.use([Navigation])
export default class Team extends Component {

    render() {
        return (
            <section className="team-section">
                <div className="container">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        loop
                        navigation
                        >
                        <SwiperSlide>
                            <div className="card">
                                <div className="content">
                                    <div className="imgBx">
                                        <img src={user1} />
                                    </div>
                                    <div className="contentBx">
                                        <h3>El Hadj Malick SOUGOU <br /><span>Developpeur / Infographe</span></h3>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <div className="content">
                                    <div className="imgBx">
                                        <img src={user2} />
                                    </div>
                                    <div className="contentBx">
                                        <h3>Assietou GUEYE <br /><span>Developpeur web</span></h3>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="card">
                            <div className="content">
                                <div className="imgBx">
                                    <img src={user3} />
                                </div>
                                <div className="contentBx">
                                    <h3>Serigne Sonhibou SENE <br /><span>Developpeur back-end</span></h3>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        )
    }
}
