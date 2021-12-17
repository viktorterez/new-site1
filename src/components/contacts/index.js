import React, {Component} from 'react'
import {render} from 'react-dom'
import './contacts.css'
import round1 from '../../assets/roundImages/round1.png'
import logocopy from '../../assets/logocopy.png'



class Contacts extends Component {
    render() {
        return(
            <div className = "contacts_container">
                <div className ="contactsItem">
                    <div className="contacts_image"><img src = {logocopy}></img></div>
                </div>

                <div className ="contactsItem">
                    <div className="contacts_h2">Postal Address</div>
                    <div className="contacts_text"><p>PO Box 16122 Collins Street </p><p>West</p><p>Victoria 8007 </p>
<p>Australia</p></div>
                </div>

                <div className ="contactsItem">
                    <div className="contacts_h2">Envato Headquarters</div>
                    <div className="contacts_text"><p>121 King Street, </p><p>Melbourne </p><p>Victoria 3000</p><p>Australia</p></div>
                </div>

                <div className ="contactsItem">
                    <div className="contacts_h2">Tranmautritam</div>
                    <div className="contacts_text"><p>Tranmautritam@gmail.com</p><p>+84 935 815 989</p><p>tranmautritam.com</p><p>Vietnam</p></div>
                </div>
            </div>
        )

    }
}

export default Contacts;