import React, { Component } from 'react'
import Header from '../components/Header/'
import Contacts from '../components/contacts/'
import Footer from '../components/footer/'



export default class Shortcodes extends Component {
    render() {
        return (
            <div>
                <Header />
                Shortcodes
                <Contacts />
                <Footer />

            </div>
        )
    }
}
