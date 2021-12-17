import React, {Component} from 'react'
import {render} from 'react-dom'
import './footer.css'
import social from '../../assets/footersocial.png'




class Footer extends Component {
    render() {
        return(
            <div> 
                <div className = "container_footer">
                   <div className = "footer_text">© 2015 All Rights Reserved <span className = "footer_text-light">Tranmautritam</span> - Envato Pty Ltd. Contact the Envato Market Help Team.</div>
                   <div className = "footer_images">
                       <div><img src = {social}></img></div>
                   </div>
                </div>
            </div>
            
            )
    
        }
    }
    
    export default Footer;