import React, { Component } from 'react'
import Header from '../components/Header/'
import Blueline from '../components/blueline/'
import Contacts from '../components/contacts/'
import Footer from '../components/footer/'



export default class Portfolio extends Component {
    render() {
        return (
            <div>
                <Header />
                Portfolio
                <Blueline />
                <Contacts />
                <Footer />

            </div>
        )
    }
}
