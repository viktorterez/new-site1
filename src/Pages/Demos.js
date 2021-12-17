import React, { Component } from 'react'
import Header from '../components/Header/'
import Contacts from '../components/contacts/'
import Footer from '../components/footer/'


export default class Demos extends Component {
    render() {
        return (
            <div>
                <Header />
                Demos
                <Contacts />
                <Footer />

            </div>
        )
    }
}
