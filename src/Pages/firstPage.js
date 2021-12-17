import React, { Component } from 'react'
import { render } from 'react-dom';
import Header from '../components/Header/'
import Slider from '../components/sliders/mainSlider/'
import Rounds from '../components/rounds/'
import Three from '../components/three/'
import Whiteline1 from '../components/whiteline1/'
import Grids1 from '../components/grids1/'
import Greenline1 from '../components/greenline1/'
import LittleCards from '../components/littleCards/'
import Contacts from '../components/contacts/'
import Footer from '../components/footer/'



class StartPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Slider />
                <Rounds />
                <Three />
                <Whiteline1 />
                <Grids1 />
                <Greenline1  />
                <LittleCards />
                <Greenline1 color = "blueline" />
                <Contacts />
                <Footer />
            </div>
        )
    }
}

export default StartPage
