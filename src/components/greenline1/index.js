import React, {Component} from 'react'
import {render} from 'react-dom'
import './greenline1.css'



class Greenline1 extends Component {
    render() {
        return(
            <div> 
                <div className = "container_greenline1"  >
                {/* style= {{ backgroundColor: this.props.color }} */}
                   <div className = "container_greenline1-text">Become A Part Of TheFox Business Community Today</div>
                   <div className = "container_greenline1button"><button className="greenline1_button">purchase now</button></div>
                </div>
            </div>
            
            )
    
        }
    }
    
    export default Greenline1;