import React, { Component } from 'react'
import Header from '../components/Header/'
import Contacts from '../components/contacts/'
import Footer from '../components/footer/'


export default class Shop extends Component {
    render() {
        return (
            <div>
                <Header />
                Shop
                <Contacts />
                <Footer />
            </div>
        )
    }
}
