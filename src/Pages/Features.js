import React, { Component } from 'react'
import Header from '../components/Header/'
import Rounds from '../components/rounds/'
import Contacts from '../components/contacts/'
import Footer from '../components/footer/'



export default class Features extends Component {
    render() {
        return (
            <div>
                <Header />
                Features
                <Rounds />
                <Contacts />
                <Footer />

            </div>
        )
    }
}
